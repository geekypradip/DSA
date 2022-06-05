var input=`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`;
var newInput=input.split("\n");
var t=Number(newInput[0]);
var pos=1;
for(var i=1;i<=t;i++,pos+=2){
 var arrSizeAndKValues=newInput[pos].split(" ").map(Number);
 var arr=newInput[pos+1].split(" ").map(Number);
 letsgenerate(arr,arrSizeAndKValues)
}
function letsgenerate(arr,arrSizeAndKValues){
    arr.sort(function(a,b){
        return a-b;
    });
var leftIndex=-1,rightIndex=-1;
var left=0,right=arrSizeAndKValues[0]-1;
while(left<right){
    if(arr[left]+arr[right]>arrSizeAndKValues[1])
    right--;
    else if(arr[left]+arr[right]<arrSizeAndKValues[1])
    left++;
    else
    {
        leftIndex=left;rightIndex=right;
        break;
    }
}
console.log(`${leftIndex} ${rightIndex}`)
}