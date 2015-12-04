import THREE from "three"

export default (particle, size, color) => {
    const mesh = new THREE.Mesh(
        new THREE.SphereGeometry( size, 8, 6 ),
        new THREE.MeshBasicMaterial( {color: color} )
    )

    mesh.position.copy(new THREE.Vector3(
        particle.get("position").get("x"),
        particle.get("position").get("y"),
        0
    ))

    return mesh
}