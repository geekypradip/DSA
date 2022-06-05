var input=`1 2 3
5 6 7
7 8 9`;
var newInput=input.split("\n");
var arr=[]
for(var i=0;i<newInput.length;i++){
arr.push(newInput[i].split(" ").map(Number));
}
var sum=0;
for(var j=0;j<arr.length;j++){
  for(var k=0;k<arr[j].length;k++){
 sum+=arr[j][k]
  }
}
console.log(sum)
