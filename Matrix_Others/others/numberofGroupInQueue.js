// var input=`6
// 1 2 4 3 5 8`;
// var newInput=input.split("\n");
// var sizeOfArray=newInput[0];
// var arr=newInput[1].split(" ").map(Number);
// var count=1;
// for(var i=0;i<sizeOfArray;i++){
//     if(arr[i]>arr[i+1]){
//       count+=1;
//     }
// }
// console.log(count)

var str=`abcab`;
var count=str.length;
for(var i=0;i<str.length;i++){
    for(var j=i+1;j<str.length;j++){
        if(str[i]===str[j])
          count+=1;
    }

}

console.log(count)