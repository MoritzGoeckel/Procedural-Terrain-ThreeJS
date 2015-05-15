function Terrain(position, size, resolution, heightmap)
{
    this.position = position;

    var geometry = new THREE.PlaneBufferGeometry(size, size, (resolution * size) - 1, (resolution * size) - 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );

    //Rotate it
    geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

    var vertices = geometry.attributes.position.array;
		for ( var i = 0; (i * 3) < vertices.length && i < heightmap.length; i++) {
      vertices[i * 3 + 2] = heightmap[i];
		}

    this.mesh = new THREE.Mesh( geometry, material);

    this.mesh.castShadow = true;
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);

    this.addToScene = function(scene)
    {
        scene.add(this.mesh);
    };
}
