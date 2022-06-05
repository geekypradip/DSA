var input=`6
1 15
1 20
2
3
2
3`;
var input=input.split("\n");
var stack=[];
var testCase=Number(input[0]);
for(var i=1;i<=testCase;i++){
    var arr=input[i].split(" ").map(Number);
    if(arr[0]===1)
    Push(arr[1]);
    else if(arr[0]===2)
    Pop();
    else if(arr[0]===3)
    {
        if(stack.length>0){
            console.log(stack[stack.length-1])
        }
        else
        console.log("Empty!");
    }
}
function Push(n){
    stack[stack.length]=n;
}
function Pop() {
   stack.splice(-1,1)
}