import {compose} from "lodash"
import Vec2D from "vector2d"

export default (options) => {
    options = {
        forcePropName: null,
        power: 2,
        ...options
    }

    return ({particle, particles}) => {
        // nothing to do
        if(
            !particle.has(options.forcePropName) ||
            !particle.has("velocity") ||
            !particle.has("position")
        ) return { particle: particle, particles: particles }



        return {
            particles: particles,
            particle: particles.reduce((carry, otherParticle) => {
                if(!options.forcePropName || !otherParticle.has(options.forcePropName)) return carry
                // if other is this
                if(particle.get("id") === otherParticle.get("id")) return carry

                // vector from one particle to the other
                const vectX = otherParticle.get("position").get("x") - particle.get("position").get("x")
                const vectY = otherParticle.get("position").get("y") - particle.get("position").get("y")

                var diffVect = Vec2D.ObjectVector(vectX, vectY)

                // Do a sort of coulomb's law here

                var magnitude = diffVect.magnitude()

                // in the coulomb's law equation, negative forces are attractive.  That's not how it works here, so we need to multiply by -1
                var force = -1 * (particle.get(options.forcePropName) * otherParticle.get(options.forcePropName)) / Math.pow(magnitude, options.power)

                var affectVector = diffVect.unit().mulS( force )

                return compose(carry, (composedParticle) => {
                    return composedParticle
                        .setIn(["velocity", "x"], composedParticle.get("velocity").get("x") + affectVector.getX())
                        .setIn(["velocity", "y"], composedParticle.get("velocity").get("y") + affectVector.getY())
                })
            }, compose(p => p))(particle)
        }
    }
}