import {compose} from "lodash"
import BounceUtils from "./Bounce/BounceUtils"

const bounceHorizontal = (options) => {
    return (particle) => {
        if(BounceUtils.shouldBounceHorizontal(particle, options)) {
            const velocityX = particle.get("velocity").get("x")
            return particle.setIn(["velocity", "x"], velocityX * -1 * options.dampen)
        }
        else {
            return particle
        }
    }
}

const bounceVerticle = (options) => {
    return (particle) => {
        if(BounceUtils.shouldBounceVertical(particle, options)) {
            const velocityY = particle.get("velocity").get("y")
            return particle.setIn(["velocity", "y"], velocityY * -1 * options.dampen)
        }
        else {
            return particle
        }
    }
}

export default (options) => {
    options = {
        left: 1,
        right: 1,
        top: 1,
        bottom: 1,
        dampen: 0.5,
        ...options,
    }

    return ({particle, particles}) => {
        // if no velocity or position, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("position")
        ) return { particle: particle, particles: particles }

        return {
            particle: compose(bounceHorizontal(options), bounceVerticle(options))(particle),
            particles: particles,
        }
    }
}