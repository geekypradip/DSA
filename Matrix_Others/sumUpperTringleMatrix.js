var input=`1 2 3
5 6 7
7 8 9`;
var newInput=input.split("\n");
var matrix=[];
for(var i=0;i<newInput.length;i++){
    matrix.push(newInput[i].split(" ").map(Number));
}
var sum=0;
for(var i=0;i<matrix.length;i++){
    for(var j=i;j<matrix[i].length;j++){
        sum+=matrix[i][j];
    }
}
console.log(sum)