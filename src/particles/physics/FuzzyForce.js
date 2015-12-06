import CoulombForce from "./CoulombForce"

export default () => {
    return CoulombForce({
        forcePropName: "fuzziness",
        power: 2,
    })
}