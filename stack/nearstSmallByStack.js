var input=`5
5 4 1 3 2`;
input=input.split("\n");
var arrSize=Number(input[0]);
var inputArr=input[1].split(" ").map(Number);
var resultArr=[];
var stack=[];
for(var i=0;i<arrSize;i++){
    while(stack.length!==0&&stack[stack.length-1]>=inputArr[i]){
       stack.pop();
    }
       if(stack.length==0){
        resultArr.push(-1)
    }
    else{
       resultArr.push(stack[stack.length-1]);
    }
    stack.push(inputArr[i])

    
   
}
console.log(resultArr)