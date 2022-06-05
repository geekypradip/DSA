var input=`3 5`;
input=input.split(" ").map(Number);
var n=input[0];
var r=input[1];
var result=fun(n,r);
console.log(result.toFixed(4))
function fun(n,r){
    if(n===0)
    return 1.0000;
    else{
        return 1/Math.pow(r,n)+fun(n-1,r);
    }
}