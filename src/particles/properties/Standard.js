import {Properties} from "particles/Property"
import Position2D from "particles/properties/Position2D"
import Velocity from "particles/properties/Velocity"
import Direction2D from "particles/properties/Direction2D"

export default Properties(
    Position2D({posX: 10, posY: 20}),
    Direction2D({dirX: 1, dirY: 1}),
    Velocity({velocity: 20})
)