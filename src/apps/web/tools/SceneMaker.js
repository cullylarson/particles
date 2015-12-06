import PIXI from "pixi.js"

export default (width, height) => {
    const renderer = PIXI.autoDetectRenderer(width, height, { antialias: true })
    const stage = new PIXI.Container()
    stage.interactive = true

    return {
        renderer: renderer,
        stage: stage
    }
}