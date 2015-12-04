import "./style/main.scss"
import ParticleMaker from "./tools/ParticleMaker"
import SceneMaker from "./tools/SceneMaker"
import ParticleArtist from "./visualize/ParticleArtist"

window.onload = () => setTimeout(() => {
    const widthRange = [
        -1*window.innerWidth/2,
        window.innerWidth/2
    ]

    const heightRange = [
        -1*window.innerHeight/2,
        window.innerHeight/2
    ]

    const particles = ParticleMaker(10, widthRange, heightRange, [1, 10])

    const sceneInfo = SceneMaker(
        document.getElementById("the-universe"),
        window.innerWidth,
        window.innerHeight
    )

    particles.map(p => sceneInfo.scene.add(ParticleArtist(p, 3, 0xff0000)))


    const render = () => {
        requestAnimationFrame( render );
        sceneInfo.renderer.render( sceneInfo.scene, sceneInfo.camera );
    }
    render()
}, 1)

