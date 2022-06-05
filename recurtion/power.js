var input=`3 4`;
var arr=input.split(" ").map(Number);
var count=1;
var result=power(arr[0]);
console.log(result);
function power(n){
    if(arr[1]===0)
    return 1;
    else if(count===arr[1])
    return n;
    else
    {
        count+=1;
        return power(arr[0]*n)
    }
}