const computeComponentPosition = (positionComponent, velocityComponent, velocityFactor) => {
    return positionComponent + velocityComponent * velocityFactor
}

export default (options) => {
    options = {
        velocityFactor: 1,
        ...options,
    }

    return (particle) => {
        // if no velocity or position, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("position")
        ) return particle

        return particle
            .set("posX", computeComponentPosition(
                particle.get("position").get("x"),
                particle.get("velocity").get("x"),
                options.velocityFactor
            ))
            .set("posY", computeComponentPosition(
                particle.get("position").get("y"),
                particle.get("velocity").get("y"),
                options.velocityFactor
            ))
    }
}