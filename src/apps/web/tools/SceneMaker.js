import PIXI from "pixi.js"

export default (width, height) => {
    const renderer = PIXI.autoDetectRenderer(width, height, { antialias: true })
    const stage = new PIXI.Container()
    stage.interactive = true;

    const graphics = new PIXI.Graphics()
    stage.addChild(graphics);

    return {
        renderer: renderer,
        stage: stage,
        graphics: graphics,
    }
}