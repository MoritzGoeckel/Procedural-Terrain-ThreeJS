function HeightMapGenerator()
{
  this.generateRandom = function(size, resolution)
  {
    var heightmap = [];
    for(i = 0; i < size * size * resolution; i++)
      heightmap[i] = getRand(10);

    return heightmap;
  };

  this.generateDiamond = function(size, resolution)
  {
    var map = new Array((size * resolution));
    for(i = 0; i < map.length; i++){
      map[i] = new Array((size * resolution));
    }

    map[0][0] = getRand(5) + 5;
    map[0][map.length - 1] = getRand(5) + 5;
    map[map.length - 1][0] = getRand(5) + 5;
    map[map.length - 1][map.length - 1] = getRand(5) + 5;

    makeRect();

    //Convert to one dimensional array
    var output = [];
    for(x = 0, c = 0; x < map.length; x++){
      for(y = 0; y < map[x].length; y++){
        output[c] = (map[x][y] !== undefined ? map[x][y] : 0);
        c++;
      }
    }

    console.log(output);

    return output;
  };

  function getRand(max){
    return Math.floor(Math.random() * max);
  }

  function makeRect(, size, resolution, map){ //Punkt REKURISOABSD 
    divide(0, 0, 0, map.length - 1, map);                               //Links Oben -> Links Unten
    divide(0, 0, map.length - 1, 0, map);                               //Links Oben -> Rechts Oben
    divide(0, 0, map.length - 1, map.length - 1, map);                  //Links Oben -> Rechts Unten (Mitte)
    divide(0, map.length - 1, map.length - 1, map.length - 1, map);    //Links Unten -> Rechts Unten
    divide(map.length - 1, 0, map.length - 1, map.length - 1, map);    //Rechts Oben -> Rechts Unten
  }

  this.generate = this.generateDiamond;

  function divide(x1, y1, x2, y2, map){
    var value = (map[x1][y1] + map[x1][y1]) / 2;
    value = value - getRand(10) + 5;
    map[Math.floor((x1 + x2) / 2)][Math.floor((y1 + y2) / 2)] = value;
  }
}
