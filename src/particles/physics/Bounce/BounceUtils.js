const BounceUtils = {
    getVerticalDirection: p => p.get("velocity").get("y") < 0 ? "up" : "down",
    getHorizontalDirection: p => p.get("velocity").get("x") < 0 ? "left" : "right",

    shouldBounceHorizontal: (particle, box) => {
        const x = particle.get("position").get("x")
        const direction = BounceUtils.getHorizontalDirection(particle)

        if((x <= box.left && direction === "left") || (x >= box.right && direction === "right")) {
            return true
        }
        else {
            return false
        }
    },

    shouldBounceVertical: (particle, box) => {
        const y = particle.get("position").get("y")
        const direction = BounceUtils.getVerticalDirection(particle)

        if ((y <= box.top && direction === "up") || (y >= box.bottom && direction === "down")) {
            return true
        }
        else {
            return false
        }
    }
}

export {BounceUtils as default}