var grid = []
var width = 25;
for(i=0;i<width;i++){
  grid[i] = [];
  for(j=0;j<width;j++){
    grid[i][j] = 0;
  }
}
var emptyGrid = [];
for(i=0;i<width;i++){
  emptyGrid[i] = [];
  for(j=0;j<width;j++){
    emptyGrid[i][j] = 0;
  }
}
grid[10][10]=1;
grid[10][11]=1;
grid[10][12]=1;
grid[9][12]=1;
grid[8][11]=1;
function print(squareArray){
  for(line=0;line<width;line++){
    console.log(squareArray[line].join(" "));
  }
  console.log("\n")
}
function mod(n, m) {
        return ((n % m) + m) % m;
}
print(grid);
function accessElem(xIndex,yIndex){
  return grid[mod(xIndex,width)][mod(yIndex,width)];
}
function nextIterate(inputGrid){
  var nextGrid = [];
  for(i=0;i<width;i++){
    nextGrid[i] = [];
    for(j=0;j<width;j++){
      nextGrid[i][j] = 0;
    }
  }
  for(x=0;x<width;x++){
    for(y=0;y<width;y++){
      var currentCell = inputGrid[x][y]
      var neighborSum = accessElem(x-1,y-1)+accessElem(x-1,y)+accessElem(x-1,y+1)+accessElem(x,y-1)+accessElem(x,y+1)+accessElem(x+1,y-1)+accessElem(x+1,y)+accessElem(x+1,y+1)
      if(currentCell===1){
        if(neighborSum===2||neighborSum===3){
          nextGrid[x][y] = 1;
        }else{
          nextGrid[x][y] = 0;
        }
      }else if(currentCell===0){
        if(neighborSum===3){
          nextGrid[x][y] = 1;
        }
      }
    }
  }

  return nextGrid
}
var interval = setInterval(function() {
      print(grid);
      grid = nextIterate(grid);
}, 100);
