export default (graphics, particle) => {
    const color = particle.has("color") ? particle.get("color") : 0xff000
    const size = particle.has("size") ? particle.get("size") : 10

    graphics.clear()
    graphics.lineStyle(0)
    graphics.beginFill(color)
    graphics.drawCircle(particle.get("position").get("x"), particle.get("position").get("y"), size)
    graphics.endFill()
}