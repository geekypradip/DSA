var input=`6
1
2 5
2 7
2 9
1
1`;
input=input.split("\n");
var operation=Number(input[0]);
var stack=[];
for(var i=1;i<=operation;i++){
    var arr=input[i].split(" ").map(Number);
    if(arr[0]===1)
    {
        if(stack.length>0){
            console.log(stack[stack.length-1]);
            stack.splice(-1,1)
        }
        
        else
        console.log(`No Food`);
    }
    else if(arr[0]===2)
    Push(arr[1]);

}
function Push(N){
    stack[stack.length]=N;
}