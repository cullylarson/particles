import {Properties} from "particles/Property"
import Position2D from "particles/properties/Position2D"
import Velocity from "particles/properties/Velocity"

export default Properties(
    Position2D({position: { x: 10, y: 20 }}),
    Velocity({velocity: { x: 20, y: 20 }})
)