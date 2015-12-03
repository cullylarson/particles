import Standard from "particles/properties/Standard"

const particle = Standard({
    posX: 10,
    posY: 20,
    dirX: 2,
    dirY: 2,
    velocity: 20,
})

console.log(particle.toString())