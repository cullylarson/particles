import Standard from "particles/properties/Standard"
import RandomUnitVector from "./../util/RandomUnitVector"
import {default as RandomUniform, RandomUniformInt} from "./../util/RandomUniform"

export default function(numParticles, posXRange, posYRange, velRange) {
    return Array.apply(null, {length: numParticles}).map(() => {
        const directionUnit = RandomUnitVector()

        return Standard({
            posX: RandomUniformInt(posXRange[0], posXRange[1]),
            posY: RandomUniformInt(posYRange[0], posYRange[1]),
            velocity: RandomUniform(velRange[0], velRange[1]),
            dirX: directionUnit[0],
            dirY: directionUnit[1],
        })
    })
}