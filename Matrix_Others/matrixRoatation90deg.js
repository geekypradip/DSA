//matrix ratation by 90 deg  //4 8 4 8
var input=`4  
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`;
var newInput=input.split("\n");
var size=Number(newInput[0]);
var matrix=[];
for(var i=1;i<=size;i++){
    matrix.push(newInput[i].split(" ").map(Number));
}
for(var i=size-1;i>=0;i--){
    for(var j=0;j<size;j++){
        process.stdout.write(`${matrix[j][i]} `);
    }
    console.log("")
}