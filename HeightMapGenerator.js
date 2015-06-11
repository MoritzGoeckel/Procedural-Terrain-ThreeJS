function HeightMapGenerator()
{
  this.generateRandom = function(size)
  {
    var heightmap = [];
    for(i = 0; i < size * size + 1; i++)
      heightmap[i] = getRand(10);

    return heightmap;
  };

  this.generateDiamond = function(size)
  {
    var map = new Array(size + 1);
    for(i = 0; i < map.length; i++){
      map[i] = new Array(size + 1);
    }

    map[0][0] = getRand(20);
    map[0][size] = getRand(20);
    map[size][0] = getRand(20);
    map[size][size] = getRand(20);

    makeRect(0, 0, size, 0, map);

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

  function makeRect(x, y, size, interation, map){
    divide(x, y, x, y + size, interation, map);                   //Links Oben -> Links Unten
    divide(x, y, x + size, y, interation, map);                   //Links Oben -> Rechts Oben
    divide(x, y, x + size, y + size, interation, map);            //Links Oben -> Rechts Unten (Mitte)
    divide(x, y + size, x + size, y + size, interation, map);     //Links Unten -> Rechts Unten
    divide(x + size, y, x + size, y + size, interation, map);     //Rechts Oben -> Rechts Unten

    if(size >= 4)
    {
        //Rekursion
        var halfSize = Math.floor(size / 2);
        var newIteration = interation + 1;

        makeRect(x, y, halfSize, newIteration, map);                    //Oben Links
        makeRect(x + halfSize, y, halfSize, newIteration, map);         //Oben Rechts
        makeRect(x, y + halfSize, halfSize, newIteration, map);         //Unten Links
        makeRect(x + halfSize, y + halfSize, halfSize, newIteration, map); //Unten Rechts
    }
  }

  this.generate = this.generateDiamond;

  function divide(x1, y1, x2, y2, interation, map){
    var value = (map[x1][y1] + map[x2][y2]) / 2;

    if(interation === 0)
      interation = 1;

    var randPower = 250 / Math.pow(interation, 2.3);

    value = value - getRand(randPower) + (randPower / 2);
    value = Math.round(value);

    var midCordX = Math.floor((x1 + x2) / 2);
    var midCordY = Math.floor((y1 + y2) / 2);

    if(map[midCordX][midCordY] === undefined || map[midCordX][midCordY] === 0)
      map[midCordX][midCordY] = value;
  }
}
