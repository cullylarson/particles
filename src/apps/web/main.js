import "./style/main.scss"
import {Map, List} from "immutable"
import {compose} from "lodash"
import PIXI from "pixi.js"
import ParticleMaker from "./tools/ParticleMaker"
import SceneMaker from "./tools/SceneMaker"
import ParticleArtist from "./visualize/ParticleArtist"
import Clingy from "particles/dust/Clingy"
import Bruiser from "particles/dust/Bruiser"
import Movement2D from "particles/physics/Movement2D"
import BounceBox from "particles/physics/BounceBox"
import FuzzyForce from "particles/physics/FuzzyForce"

window.onload = () => setTimeout(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const particles =
        ParticleMaker(Clingy, {}, 50, [0, width-1], [0, height-1], [1, 4])
        .concat(ParticleMaker(Bruiser, {}, 50, [0, width-1], [0, height-1], [1, 4]))
    const pGraphics = particles.reduce((carry, p) => {
        return carry.set(p.get("id"), new PIXI.Graphics())
    }, new Map())

    const physics = compose(
        Movement2D(),
        FuzzyForce(),
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

    // using a "mutable" variable because making render() a functor produces memory
    // leaks (i.e. it's called on every animation frame by the previous functor call,
    // ad infinitum)
    let loopParticles = particles.asImmutable()

    const render = () => {
        loopParticles.forEach(p => ParticleArtist(pGraphics.get(p.get("id")), p))
        sceneInfo.renderer.render( sceneInfo.stage )

        loopParticles = loopParticles.reduce((carry, p) => {
            return carry.push(physics({particle: p, particles: loopParticles}).particle)
        }, new List())

        requestAnimationFrame( render )
    }

    requestAnimationFrame( render )
}, 1)

