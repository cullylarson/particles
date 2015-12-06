import {RandomUniformInt} from "./RandomUniform"

const options = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const numOptions = options.length

export default (size) => {
    size = size || 20

    return Array.apply(null, {length: size}).reduce((carry) => {
            const idx = RandomUniformInt(0, numOptions)
            return carry + options.substr(idx,1)
        }, "")
}