import THREE from "three"

export default (canvas, width, height) => {
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 10 )
    camera.position.z = 10

    var renderer = new THREE.WebGLRenderer({canvas: canvas})
    renderer.setSize( width, height )

    return {
        renderer: renderer,
        scene: scene,
        camera: camera,
    }
}