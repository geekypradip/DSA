var input=`1 2 3
5 6 7
7 8 9
5 6 0`;                                             
var newInput=input.split("\n");
var arr=[];
for(var i=0;i<newInput.length;i++){
    arr.push(newInput[i].split(" ").map(Number));
}
//console.log(arr);
var l=(arr.length);
//console.log(arr[0].length);
var coll=arr[0].length;

for(var i=0;i<coll;i++){
    var sum=0;
        
    for(var j=0;j<l;j++)
       sum+=arr[j][i];
  console.log(sum)
}