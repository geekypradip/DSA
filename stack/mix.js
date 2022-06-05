var input=`1
6
5 1 6 2 5 1`;
input=input.split("\n");
var testCase=Number(input[0]);
var pos=1;
for(var i=0;i<testCase;i++,pos+=2){
    var arrsize=Number(input[pos]);
    var str=String(input[pos+1])
    var removeWhiteSpace=str.trim();
    var arr=removeWhiteSpace.split(" ").map(Number);
   
    findGreater(arr,arrsize);
}
function findGreater(arr,arrsize){
    var stack=[];
    var result=[];
    for(var i=arrsize-1;i>=0;i--){
        while(stack.length!=0&&arr[i]>=stack[stack.length-1]){
            stack.pop();
        }
      if(stack.length===0){
         
          result.push(-1);
      }
    else{
          result.push(stack[stack.length-1]);
      }
      stack.push(arr[i]);
    }
    console.log(result.reverse());
    findSum(result)
}
function findSum(result){
    var stack=[];
    var result1=[];
    for(var i=arrsize-1;i>=0;i--){
        while(stack.length!=0&&result[i]>=stack[stack.length-1]){
            stack.pop();
        }
      if(stack.length===0){
         
          result.push(-1);
      }
    else{
          result.push(stack[stack.length-1]);
      }
      stack.push(arr[i]);
    }
    console.log(result.reverse());
    findSum(result)
}