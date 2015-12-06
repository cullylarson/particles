import RandomVector from "particles/util/RandomVector"
import RandomKey from "particles/util/RandomKey"
import {List} from "immutable"
import {default as RandomUniform, RandomUniformInt} from "particles/util/RandomUniform"

export default function(TheKind, options, numParticles, posXRange, posYRange, velMagnitudeRange) {
    return Array.apply(null, {length: numParticles}).reduce((carry) => {
        const velocityMag = RandomUniform(velMagnitudeRange[0], velMagnitudeRange[1])
        const velocity = RandomVector(velocityMag)

        return carry.push(TheKind({
            id: RandomKey(20),

            position: {
                x: RandomUniformInt(posXRange[0], posXRange[1]),
                y: RandomUniformInt(posYRange[0], posYRange[1])
            },

            velocity: {
                x: velocity[0],
                y: velocity[1],
            },

            ...options,
        }))
    }, new List())
}