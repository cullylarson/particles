import {Properties} from "particles/Property"
import Position2D from "particles/properties/Position2D"
import Velocity from "particles/properties/Velocity"
import Color from "particles/properties/Color"
import Size from "particles/properties/Size"
import Id from "particles/properties/Id"
import Fuzziness from "particles/properties/Fuzziness"
import Hardness from "particles/properties/Hardness"

export default Properties(
    Id(),
    Position2D(),
    Velocity(),
    Color({color: 0xff5460}),
    Size({size: 4}),
    Fuzziness({fuzziness: 5}),
    Hardness({hardness: 10})
)