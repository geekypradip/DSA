//3d array print elements
var input=`2 2 2
1 2 3 4 5 6 7 8`;
var newInput=input.split("\n");
var matrixsizes=newInput[0].split(" ").map(Number);
var matrix=newInput[1].split(" ").map(Number);
var threedMatrix=[];

for(var i=0;i<matrixsizes[0];i++){
  var twoDmatrix=[];
  var row=matrixsizes[1]
  for(var j=0;j<row;row--){
        twoDmatrix.push(matrix.splice(j,matrixsizes[2]));
  }
  threedMatrix.push(twoDmatrix);
}
for(var i=0;i<matrixsizes[0];i++){
  for(var j=0;j<matrixsizes[1];j++){
    for(var k=0;k<matrixsizes[2];k++){
      process.stdout.write(`${threedMatrix[i][j][k]} `)
    }
    console.log("")
  }
}
//console.log(threedMatrix.length)
