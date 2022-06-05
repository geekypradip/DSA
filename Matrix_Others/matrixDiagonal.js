function min(x,y){
    if(x<y)
      return x;
    else
     return y;
    }
    var input=`3 3
1 2 3
4 5 6
7 8 9
6`;
     var newInput=input.split("\n");
    var sizeCandR=newInput[0].split(" ").map(Number);
    var matrix=newInput.splice(1,sizeCandR[0]);
    var k=Number(newInput[1]);
    var twoDmatrix=[];
    for(var i=0;i<matrix.length;i++){
        twoDmatrix.push(matrix[i].split(" ").map(Number));
    }
    var x;
    var y;
    for(var i=0;i<sizeCandR[0];i++){
        for(var j=0;j<sizeCandR[1];j++){
          if(twoDmatrix[i][j]===k){
          x=i;
            y=j;
            break;
          }
      }
    }
    
  for(var i=x-min(x,y),j=y-min(x,y);i<sizeCandR[0]&&j<sizeCandR[1];i++,j++){
     process.stdout.write(`${twoDmatrix[i][j]} `)
    //  console.log(`${twoDmatrix[i][j]} `)
  }

  console.log("")
  for(var i=x-min(x,sizeCandR[1]-y-1),j=y+min(x,sizeCandR[1]-y-1);i<sizeCandR[0]&&j>=0;i++,j--){
    process.stdout.write(`${twoDmatrix[i][j]} `)
    // console.log(`${twoDmatrix[i][j]} `)
}
console.log("")