import Standard from "particles/properties/Standard"
import RandomVector from "./../util/RandomVector"
import {default as RandomUniform, RandomUniformInt} from "./../util/RandomUniform"

export default function(numParticles, posXRange, posYRange, velMagnitudeRange) {
    return Array.apply(null, {length: numParticles}).map(() => {
        const velocityMag = RandomUniform(velMagnitudeRange[0], velMagnitudeRange[1])
        const velocity = RandomVector(velocityMag)

        return Standard({
            position: {
                x: RandomUniformInt(posXRange[0], posXRange[1]),
                y: RandomUniformInt(posYRange[0], posYRange[1])
            },

            velocity: {
                x: velocity[0],
                y: velocity[1],
            },
        })
    })
}