var input=`123 3`;
input=input.split(" ");
var number=input[0].split("").map(Number);
var left=0,right=number.length-1;
var digit=0;
while(left<=right){
if(left===right){
    digit+=number[left];
   break;
}
digit+=number[Number(left)]+number[Number(right)];
left++;right--;
}
digit*=Number(input[1])
var res=findSuperDigit(String(digit));
console.log(Number(res))
function findSuperDigit(number){
    if(number.length===1)
    return number;
   var digitArr=number.split("").map(Number);
   var n=sum(digitArr);
   return findSuperDigit(String(n))
}
function sum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
