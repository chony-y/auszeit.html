import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import waterVertexShader from './shaders/water/vertex.glsl'
import waterFragmentShader from './shaders/water/fragment.glsl'
import { RedFormat } from 'three'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({ width: 350 })
const debugObject = {}  //색깔 넣어줄 때 쓰는 

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// scene.background = new THREE.Color(0xffffff); 

/**
 * Water
 */
// Geometry
const waterGeometry = new THREE.PlaneGeometry(3, 4, 512, 512)

// Color
debugObject.depthColor = '#186691'
debugObject.surfaceColor = '#99c7e8'


// Material
const waterMaterial = new THREE.ShaderMaterial({
    vertexShader : waterVertexShader,
    fragmentShader : waterFragmentShader,
    uniforms : 
    {
        uTime : { value : 0 },

        uBigWavesElevation : { value : 0.3 }, //Elevation 고도 Height
        uBigWavesFrequency : { value : new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed : { value : 0.75 },

        uSmallWavesElevation : { value : 0.1 }, 
        uSmallWavesFrequency : { value : 2.5 },
        uSmallWavesSpeed : { value : 0.1 },
        uSmallWavesIterations : { value : 5.0 }, //Iteration 반복 Repeat

        uDepthColor : { value : new THREE.Color(debugObject.depthColor) },
        uSurfaceColor : { value : new THREE.Color(debugObject.surfaceColor) },
        uColorOffset : { value : 0 },
        uColorMultiplier : { value : 10 }
    }
})

// Debug
gui.add(waterMaterial.uniforms.uBigWavesElevation, 'value').min(0).max(0.6).step(0.001).name('(B) WavesHeight')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'x').min(0).max(5).step(0.001).name('(B) WavesFrequencyX')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0).max(5).step(0.001).name('(B) WavesFrequencyY')
gui.add(waterMaterial.uniforms.uBigWavesSpeed, 'value').min(0).max(1.5).step(0.001).name('(B) WavesSpeed')

gui.add(waterMaterial.uniforms.uSmallWavesElevation, 'value').min(0).max(0.15).step(0.001).name('(S) WavesHeight')
gui.add(waterMaterial.uniforms.uSmallWavesFrequency, 'value').min(0).max(5).step(0.001).name('(S) WavesFrequency')
gui.add(waterMaterial.uniforms.uSmallWavesIterations, 'value').min(0).max(5).step(0.001).name('(S) WavesRepeat')

gui
   .addColor(debugObject, 'depthColor')
   .name('Inside')
   .onChange(() =>
   {
       waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor)
   })
gui
   .addColor(debugObject, 'surfaceColor')
   .name('Outside')
   .onChange(() =>
   {
       waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
   })

// Mesh
const water = new THREE.Mesh(waterGeometry, waterMaterial)
water.rotation.x = - Math.PI * 0.5
scene.add(water)

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
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-1, 0.4, 0.9)
scene.add(camera)
// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update water
    waterMaterial.uniforms.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()