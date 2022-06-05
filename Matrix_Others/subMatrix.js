var input=`1 2 3
5 6 7
7 8 9`;
var newInput=input.split("\n");
var matrix=[];
for(var i=0;i<newInput.length;i++){
    matrix.push(newInput[i].split(" ").map(Number));
}
var start=1;//row =1 and col=1
var end=2;  //row =2 and col=2
for(var i=start;i<=end;i++){
    for(var j=start;j<=end;j++){
        process.stdout.write(`${matrix[i][j]} `)
    }
    console.log("");
}