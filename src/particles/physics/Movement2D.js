const computeComponentPosition = (positionComponent, velocityComponent, velocityFactor) => {
    return positionComponent + velocityComponent * velocityFactor;
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
                particle.get(["position", "x"]),
                particle.get(["velocity", "x"]),
                options.velocityFactor
            ))
            .set("posY", computeComponentPosition(
                particle.get(["position", "y"]),
                particle.get(["velocity", "y"]),
                options.velocityFactor
            ))
    }
}