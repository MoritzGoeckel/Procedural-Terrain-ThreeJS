function HeightMapGenerator()
{
  this.generate = function()
  {
    var heightmap = [];
    for(i = 0; i < 100 * 100 * 0.5; i++){
      heightmap[i] = Math.floor(Math.random() * 10);
    }

    return heightmap;
  };
}
