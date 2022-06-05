var input=`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`;
input=input.split("\n");
var t=Number(input[0]);
var pos=1;
for(var i=0;i<t;i++,pos+=2){
var sizeOfArray=Number(input[pos]);
var str=String(input[pos+1]);
var removeEmptySpaceFromsides=str.trim();
var arr=removeEmptySpaceFromsides.split(" ").map(Number);
var sum=0;
var res=letFindSum(sizeOfArray,arr)
console.log(res)
}
function letFindSum(S,arr){
if(S==0)
return sum;
else{
    sum+=arr[S-1];
    return letFindSum(S-1,arr)
}
}