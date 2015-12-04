import Standard from "particles/properties/Standard"
import RandomUnitVector from "./../util/RandomUnitVector"
import {default as RandomUniform, RandomUniformInt} from "./../util/RandomUniform"

export default function(numParticles, posXRange, posYRange, velRange) {
    return Array.apply(null, {length: numParticles}).map(() => {
        const velocityUnit = RandomUnitVector()
        const velocityMag = RandomUniform(velRange[0], velRange[1])

        return Standard({
            position: {
                x: RandomUniformInt(posXRange[0], posXRange[1]),
                y: RandomUniformInt(posYRange[0], posYRange[1])
            },

            velocity: {
                x: velocityUnit[0] * velocityMag,
                y: velocityUnit[1] * velocityMag,
            },
        })
    })
}