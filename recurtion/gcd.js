var input=`2
6 9
2 25`;
input=input.split("\n");
var t=Number(input[0]);
for(var i=1;i<=t;i++){
    var arr=input[i].split(" ").map(Number);
    var result=getGCD(arr[0],arr[1])
    console.log(result)
}
function getGCD(a,b){
if(a==0)
    return b;
else{
    return getGCD(b%a,a)
}
}