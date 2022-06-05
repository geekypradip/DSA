var input=`8
39 27 11 4 24 32 32 1`;
input=input.split("\n");
var arrSize=Number(input[0]);
var stack=[];
var arr=input[1].split(" ").map(Number);
for(var i=arrSize-1;i>=0;i--){
    for(var j=i-1;j>=0;j--){
        if(arr[i]>arr[j]){
    stack.push(arr[j]);
    break;
        }
    else{
        if(j==0){
            stack.push(-1);
        }
    }

    }
if(i==0)
stack.push(-1);
}
console.log(stack.reverse().join(" "));