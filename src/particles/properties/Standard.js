import {Properties} from "particles/Property"
import Position2D from "particles/properties/Position2D"
import Velocity from "particles/properties/Velocity"
import Color from "particles/properties/Color"
import Size from "particles/properties/Size"
import Id from "particles/properties/Id"

export default Properties(
    Position2D({}),
    Velocity({}),
    Color({}),
    Size({}),
    Id({})
)