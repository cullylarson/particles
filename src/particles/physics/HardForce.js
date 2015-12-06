import {compose} from "lodash"
import Vec2D from "vector2d"
import CoulombForce from "./CoulombForce"

export default () => {
    return CoulombForce({
        forcePropName: "hardness",
        power: 3,
    })
}