import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import waterVertexShader from './shaders/water/vertex.glsl'
import waterFragmentShader from './shaders/water/fragment.glsl'
import { Plane, RedFormat } from 'three'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({ width: 450 })
const debugObject = {}  //색깔 넣어줄 때 쓰는 

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000);    //0xffffff white  0x000000 black  0x05163D navy  0x060606 dark grey


/**
 * Water
 */
// Geometry
const waterGeometry = new THREE.PlaneGeometry(6, 10, 512, 512)

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

        uBigWavesElevation : { value : 0.3 , min : 0, max : 10 }, //Elevation 고도 Height
        uBigWavesFrequency : { value : new THREE.Vector2(1.4, 1.2) },
        uBigWavesSpeed : { value : 0.25 },
        // uBigWavesSpeed : { value : Math.random() , min : 0, max : 10},

        

        uSmallWavesElevation : { value : 0.1 }, 
        uSmallWavesFrequency : { value : 2.5 },
        uSmallWavesSpeed : { value : 0.25 },
        uSmallWavesIterations : { value : 5.0 }, //Iteration 반복 Repeat

        uDepthColor : { value : new THREE.Color(debugObject.depthColor) },
        uSurfaceColor : { value : new THREE.Color(debugObject.surfaceColor) },
        uColorOffset : { value : 0 },
        uColorMultiplier : { value : 9.5 }
    }
})

// Debug
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0).max(5).step(0.0001).name('(B) NO CARE')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0).max(5).step(0.0001).name('(B) NO CARE')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0).max(5).step(0.0001).name('(B) NO CARE')


gui.add(waterMaterial.uniforms.uBigWavesSpeed, 'value').min(0.1).max(2.5).step(0.0001).name('(B) Speed')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'x').min(0).max(4).step(0.001).name('(B) FrequencyX')
gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0.4).max(1.2).step(0.001).name('(B) FrequencyY')
gui.add(waterMaterial.uniforms.uBigWavesElevation, 'value').min(0).max(0.7).step(0.0005).name('(B) Height')


gui.add(waterMaterial.uniforms.uSmallWavesElevation, 'value').min(0.07).max(0.2).step(0.0005).name('(S) Height')
gui.add(waterMaterial.uniforms.uSmallWavesFrequency, 'value').min(0.5).max(2.5).step(0.0005).name('(S) Frequency')

gui.add(waterMaterial.uniforms.uColorMultiplier, 'value').min(4).max(10).step(0.001).name('ColorMultiplier')

// gui
//    .addColor(debugObject, 'depthColor')
//    .name('Inside')
//    .onChange(() =>
//    {
//        waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor)
//    })
// gui
//    .addColor(debugObject, 'surfaceColor')
//    .name('Outside')
//    .onChange(() =>
//    {
//        waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
//    })

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
camera.position.set(-1.7, 0.6, 1.5)
// camera.rotation.set(0.5, 0, 0) 인터넷에서 본 거네 왜 안될까


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
    
    
    
    camera.position.y += 0.00001 
    // water.rotation.z = 0.1 * Math.PI * elapsedTime 물은 그대로인데 판만 돌아가.. 
    
    
    // waterMaterial.uniforms.uTime.value -= 0.1

    waterMaterial.uniforms.uBigWavesElevation.value 
    waterMaterial.uniforms.uBigWavesFrequency.value.x
    waterMaterial.uniforms.uBigWavesFrequency.value.y
    waterMaterial.uniforms.uBigWavesSpeed.value

    waterMaterial.uniforms.uSmallWavesElevation.value
    waterMaterial.uniforms.uSmallWavesFrequency.value
    waterMaterial.uniforms.uSmallWavesIterations
        

    // Update water
    waterMaterial.uniforms.uTime.value = elapsedTime * 0.8

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()