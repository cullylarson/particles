const computeComponentPosition = (positionComponent, velocityComponent, velocityFactor) => {
    return positionComponent + velocityComponent * velocityFactor
}

export default (options) => {
    options = {
        velocityFactor: 1,
        ...options,
    }

    return ({particle, particles}) => {
        // if no velocity or position, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("position")
        ) return { particle: particle, particles: particles }

        return {
            particle: particle
                .setIn(["position", "x"], computeComponentPosition(
                    particle.get("position").get("x"),
                    particle.get("velocity").get("x"),
                    options.velocityFactor
                ))
                .setIn(["position", "y"], computeComponentPosition(
                    particle.get("position").get("y"),
                    particle.get("velocity").get("y"),
                    options.velocityFactor
                )),
            particles: particles,
        }
    }
}