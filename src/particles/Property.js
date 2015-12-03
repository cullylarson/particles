import {Map} from "immutable"
import {compose} from "lodash"

export default defaultProps =>
    initProps =>
        carryProps =>
            new Map(defaultProps)
                .merge(initProps)
                .merge(carryProps)

export {compose as Properties}