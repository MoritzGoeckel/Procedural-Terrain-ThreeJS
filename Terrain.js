function Terrain(position, size, heightmap)
{
    this.position = position;

    var geometry = new THREE.PlaneBufferGeometry(size, size, size, size);
    var material = new THREE.MeshLambertMaterial( { color: 0xd0d0d0 } );

    //Rotate it
    //geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

    var vertices = geometry.attributes.position.array;
		for ( var i = 0; (i * 3) < vertices.length && i < heightmap.length; i++) {
      if(isNaN(heightmap[i]) === false)
        vertices[(i * 3) + 2] = heightmap[i];
		}

    /*this.mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [
      new THREE.MeshLambertMaterial( { color: 0xd0d0d0 } ),
      new THREE.MeshBasicMaterial( { color: 0xd0d0d0, wireframe: true} )
    ]);*/

    this.mesh = new THREE.Mesh( geometry, material);

    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;

    this.mesh.position.set(this.position.x, this.position.y, this.position.z);

    this.addToScene = function(scene)
    {
        scene.add(this.mesh);
    };
}
