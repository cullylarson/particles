import RandomUnitVector from "./RandomUnitVector"

export default (magnitude) => {
    return RandomUnitVector()
        .map(c => c*magnitude)
}