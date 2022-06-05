var input=`5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7`;
var newInput=input.split("\n");
var sizeOfArray=Number(newInput[0]);
var matrix=[];
var sum=0;
for(var i=0;i<sizeOfArray;i++){
matrix.push(newInput[i+1].split(" ").map(Number));
for(var j=0;j<sizeOfArray;j++){
if(i===0||i===sizeOfArray-1)
    sum+=matrix[i][j];
         else{                 
    if(j===0||j===sizeOfArray-1)
        sum+=matrix[i][j];     
           } 
     }
}
for(var i=1;i<=sizeOfArray-2;i++){
    for(var j=1;j<=sizeOfArray-2;j++){
        if(i===j)
        sum+=matrix[i][j];     
            if(j===sizeOfArray-2-(i-1)&&i!==j)
            sum+=matrix[i][j];       
    }
}
console.log(sum)
