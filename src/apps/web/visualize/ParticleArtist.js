export default (graphics, particle, radius, color) => {
    graphics.lineStyle(0)
    graphics.beginFill(color)
    graphics.drawCircle(particle.get("position").get("x"), particle.get("position").get("y"), radius)
    graphics.endFill()
    console.log(particle.toString())
}