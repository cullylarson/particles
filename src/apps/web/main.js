import "./style/main.scss"
import ParticleMaker from "./tools/ParticleMaker"
import SceneMaker from "./tools/SceneMaker"
import ParticleArtist from "./visualize/ParticleArtist"

window.onload = () => setTimeout(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const particles = ParticleMaker(10, [0, width-1], [0, height-1], [1, 10])

    const sceneInfo = SceneMaker(
        width,
        height
    )

    document.getElementById("the-universe").appendChild(sceneInfo.renderer.view)

    particles.map(p => ParticleArtist(sceneInfo.graphics, p, 3, 0xff0000))


    const render = () => {
        sceneInfo.renderer.render( sceneInfo.stage )
        requestAnimationFrame( render )
    }

    requestAnimationFrame( render )
}, 1)

