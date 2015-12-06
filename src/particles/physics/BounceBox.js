import {compose} from "lodash"

const bounceHorizontal = (options) => {
    return (particle) => {
        const x = particle.get("position").get("x")

        if(x <= options.left || x >= options.right) {
            const velocityX = particle.get("velocity").get("x")
            return particle.setIn(["velocity", "x"], velocityX*-1)
        }
        else {
            return particle
        }
    }
}

const bounceVerticle = (options) => {
    return (particle) => {
        const y = particle.get("position").get("y")

        if (y <= options.top || y >= options.bottom) {
            const velocityY = particle.get("velocity").get("y")
            return particle.setIn(["velocity", "y"], velocityY * -1)
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
        ...options,
    }

    return (particle) => {
        // if no velocity or position, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("position")
        ) return particle

        return compose(bounceHorizontal(options), bounceVerticle(options))(particle)
    }
}