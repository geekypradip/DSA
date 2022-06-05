var input =`1 2 3 4
5 6 7 6
7 8 9 9
2 4 1 3`;
var newInput =input.split("\n");
var matrix=[];
for(var i=0;i<newInput.length;i++)
    matrix.push(newInput[i].split(" ").map(Number));
    var leftsum=0;
    var rightsum=0;
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
        if(i===j)
        leftsum+=matrix[i][j];
        if(j===(matrix[i].length-1)-i)
        rightsum+=matrix[i][j];
    }
}

console.log(`Diagonal difference is=${leftsum-rightsum}`)
