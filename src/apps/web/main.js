import "./style/main.scss"
import {Map} from "immutable"
import PIXI from "pixi.js"
import ParticleMaker from "./tools/ParticleMaker"
import SceneMaker from "./tools/SceneMaker"
import ParticleArtist from "./visualize/ParticleArtist"
import Movement2D from "particles/physics/Movement2D"
import BounceBox from "particles/physics/BounceBox"
import {compose} from "lodash"

window.onload = () => setTimeout(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const particles = ParticleMaker(100, [0, width-1], [0, height-1], [1, 10])
    const pGraphics = particles.reduce((carry, p) => {
        return carry.set(p.get("id"), new PIXI.Graphics())
    }, new Map())

    const physics = compose(
        Movement2D(),
        BounceBox({
            left: 0,
            right: width-1,
            top: 0,
            bottom: height-1,
        })
    )

    const sceneInfo = SceneMaker(width, height)

    pGraphics.forEach(g => sceneInfo.stage.addChild(g))
    document.getElementById("the-universe").appendChild(sceneInfo.renderer.view)

    const render = (ps) => {
        return () => {
            ps.forEach(p => ParticleArtist(pGraphics.get(p.get("id")), p))
            sceneInfo.renderer.render( sceneInfo.stage )

            const newPs = ps.map((p) => {
                return physics(p)
            })

            requestAnimationFrame( render(newPs) )
        }

    }

    requestAnimationFrame( render(particles) )
}, 1)

