function Player(position)
{
    this.position = position;
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.cameraOffset = new THREE.Vector3(0, -5, 7);

    var geometry = new THREE.CubeGeometry(1,1,1);
    var material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.castShadow = true;

    this.update = function()
    {
        //Update Camera
        var newCamPos = new THREE.Vector3();
        newCamPos.addVectors(this.position, this.cameraOffset);

        this.camera.position.set(newCamPos.x, newCamPos.y, newCamPos.z);
        this.camera.lookAt(this.position);

        //Update Mesh
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
    };

    this.addToScene = function(scene)
    {
        scene.add(this.mesh);
    };
}
