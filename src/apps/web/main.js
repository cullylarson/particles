import ParticleMaker from "./tools/ParticleMaker"

const particles = ParticleMaker(10, [1, 100], [1, 100], [1, 10])

particles.map(p => console.log(p.toString()))