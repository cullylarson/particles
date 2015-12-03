const computeComponentPosition = (positionComponent, directionComp, velocity, velocityFactor) => {
    return positionComponent + directionComp * velocity * velocityFactor;
}

export default (options) => {
    options = {
        velocityFactor: 1,
        ...options,
    }

    return (particle) => {
        // if no velocity, position, or direction, then don't do anything
        if(
            !particle.has("velocity") ||
            !particle.has("dirX") ||
            !particle.has("dirY") ||
            !particle.has("posX") ||
            !particle.has("posY")
        ) return particle

        return particle
            .set("posX", computeComponentPosition(
                particle.get("posX"),
                particle.get("dirX"),
                particle.get("velocity"),
                options.velocityFactor
            ))
            .set("posY", computeComponentPosition(
                particle.get("posY"),
                particle.get("dirY"),
                particle.get("velocity"),
                options.velocityFactor
            ))
    }
}