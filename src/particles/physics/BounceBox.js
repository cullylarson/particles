import {compose} from "lodash"

const getVerticalDirection = p => p.get("velocity").get("y") < 0 ? "up" : "down"
const getHorizontalDirection = p => p.get("velocity").get("x") < 0 ? "left" : "right"

const bounceHorizontal = (options) => {
    return (particle) => {
        const x = particle.get("position").get("x")
        const direction = getHorizontalDirection(particle)

        if((x <= options.left && direction === "left") || (x >= options.right && direction === "right")) {
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
        const direction = getVerticalDirection(particle)

        if ((y <= options.top && direction === "up") || (y >= options.bottom && direction === "down")) {
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

    return ({particle, particles}) => {
        // if no velocity or position, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("position")
        ) return particle

        return {
            particle: compose(bounceHorizontal(options), bounceVerticle(options))(particle),
            particles: particles,
        }
    }
}