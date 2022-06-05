var input=`5
1 2 3 4 0
5 6 7 8 0
1 2 3 4 0
5 6 7 8 0
4 5 7 5 3`;
var newInput=input.split('\n');
var arrSize=Number(newInput[0]);
var matrix=[];
for(var i=1;i<=arrSize;i++){
    matrix.push(newInput[i].split(" ").map(Number));
}
for(var s=0;s<Math.round(arrSize/2);s++){
   for(var i=s;i<arrSize-s;i++){
    process.stdout.write(`${matrix[s][i]} `);
}
  for(var i=s+1;i<arrSize-s;i++){
     process.stdout.write(`${matrix[i][arrSize-1-s]} `)
  }
  for(var i=arrSize-2-s;i>=s;i--){
      process.stdout.write(`${matrix[arrSize-1-s][i]} `);
  }
  for(var i=arrSize-2-s;i>=s+1;i--){
      process.stdout.write(`${matrix[i][s]} `);
  }
}
