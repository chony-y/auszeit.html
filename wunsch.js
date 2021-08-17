import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'bundler/OrbitControls.js'
import { GLTFLoader } from 'bundler/GLTFLoader.js'
import { DRACOLoader } from 'bundler/DRACOLoader.js'
import * as dat from 'dat.gui'
import { RedFormat } from 'three'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
 const textureLoader = new THREE.TextureLoader()
 const particleTexture = textureLoader.load('/textures/particles/circle_05.png')
 
 /**
  * Particles
  */
 // Geometry
 const particlesGeometry = new THREE.BufferGeometry()
 const count = 30000
 
 const positions = new Float32Array(count * 3)  // x, y, z라서인데 잘 모르겠음
 const colors = new Float32Array(count * 3) // R,G,B로 또 3이래
 
 for(let i = 0; i < count * 3 ; i++)
 {
     positions[i] = (Math.random() - 0.5) * 20 // Math.random()이 원래 0~1의 범위를 갖는데 -0.5해주면 -0.5~0.5범위가 되는거라 중앙맞춤
     colors[i] = Math.random()
 }
 
 particlesGeometry.setAttribute(
     'position',
     new THREE.BufferAttribute(positions, 3) // x, y, z로 3개 value니까 3
 )
 
 particlesGeometry.setAttribute(
     'color',
     new THREE.BufferAttribute(colors, 3) // R, G, B로 3개 value니까 3
 )

// Material
const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.color = new THREE.Color('#ff88cc')
particlesMaterial.size = 0.1
particlesMaterial.sizeAttenuation = true  // 멀어지면 작아지고 가까우면 큰
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture
//particlesMaterial.alphaTest = 0.001 // 가장자리 검정색을 없애는 수많은 방법 중 하나 / 완전 정교하지는 않지만 프로젝트에 따라 충분할 수도
//particlesMaterial.depthTest = false // 하나의 메쉬만 있으면 잘 적용되는데 다른 물체나 색이 들어가면 버그
particlesMaterial.depthWrite = false 
particlesMaterial.blending = THREE.AdditiveBlending // 물체가 겹쳐져 있으면 밝아짐 (빛의 혼합처럼)
particlesMaterial.vertexColors = true // 컬러풀하게 만들 때 

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null

gltfLoader.load(
    '/models/Planeten.glb',
    (gltf) =>
    {
        scene.add(gltf.scene)
    }
)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(9, 9, 9)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight)
camera.position.set(-6, 3, -4)
//camera.position.set(- 8, 4, 8)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true

document.body.appendChild(renderer.domElement) //유튜브 따라한거 

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if(mixer)
    {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()