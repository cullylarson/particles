import {List} from "immutable"

export default (particles, width, height) => {
    //particles.map(p => console.log(p.get("color")))
    const numParticles = particles.count()
    const parcelArea = width * height / numParticles
    const parcelWidth = parcelArea / height
    const parcelHeight = parcelArea / width
    const parcelsPerRow = width / parcelWidth
    const parcelsPerCol = height / parcelHeight

    console.log([width, height], numParticles, parcelArea, parcelsPerRow, parcelsPerCol, parcelWidth, parcelHeight)
    console.log(particles.count())

    let finalParticles = new List()

    for(let i = 0; i < numParticles; i++) {
        console.log([i % parcelsPerCol, i % parcelsPerRow])
        const pX = (i % parcelsPerCol) * parcelWidth + parcelWidth / 2
        const pY = (i % parcelsPerRow) * parcelHeight + parcelHeight / 2

        finalParticles = finalParticles.push(
            particles.get(i)
                .setIn(["position", "x"], pX)
                .setIn(["position", "y"], pY)
        )
    }
/*
    let i = 0
    for(let x = 0; x < parcelsPerRow; x++) {
        for(let y = 0; y < parcelsPerCol; y++) {
            const pX = x * parcelWidth + parcelWidth / 2
            const pY = y * parcelHeight + parcelHeight / 2

            finalParticles = finalParticles.push(
                particles.get(i++)
                .setIn(["position", "x"], pX)
                .setIn(["position", "y"], pY)
            )
        }
    }
    */

    //finalParticles.map(p => console.log(p.get("color")))
    console.log(finalParticles.count())

    return finalParticles
}