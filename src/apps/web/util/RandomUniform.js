export default (min, max) => Math.random() * (max - min) + min

export function RandomUniformInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}