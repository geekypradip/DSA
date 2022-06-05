var input0=`1 2 3
5 6 7
7 8 9`;
var input1=`2 1 2
1 2 1
2 1 2`;
var newInput1=input0.split("\n");
var newInput2=input1.split("\n");
var matrix1=[];
var matrix2=[];
for(var i=0;i<newInput1.length;i++){
    matrix1.push(newInput1[i].split(" ").map(Number));
    matrix2.push(newInput2[i].split(" ").map(Number));
}
for(var i=0;i<newInput2.length;i++){
    for(var j=0;j<matrix1[i].length;j++){
        process.stdout.write(`${matrix1[i][j]+matrix2[i][j]} `)
    }
    console.log("")
}