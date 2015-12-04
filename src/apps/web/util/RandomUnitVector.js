import Vec2D from "vector2d"

const twoPi = Math.PI * 2

const randomTheta = () => Math.random() * twoPi

export default () => {
    const unit = new Vec2D.ArrayVector(1,0)
        .rotate(randomTheta())

    return [
        unit.getX(),
        unit.getY()
    ]
}