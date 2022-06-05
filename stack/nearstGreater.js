var input=`1
4
1 3 2 4`;
var result=[];
var result1=[];
var dis1=[],dis2=[];
input=input.split("\n");
var testCase=Number(input[0]);
var pos=1;
for(var i=0;i<testCase;i++,pos+=2){
    var arrsize=input[pos];
    var str=String(input[pos+1]);
    var removeWhiteSpace=str.trim();
    var arr=removeWhiteSpace.split(" ").map(Number);
    findGreater(arr,arrsize);
    findGreater1(arr,arrsize);
}

function findGreater(arr,arrsize){
    var stack=[];
  
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
  result.reverse();
}

function findGreater1(arr,arrsize){
    var stack=[];
  
    for(var i=0;i<arrsize;i++){
        while(stack.length!=0&&arr[i]>=stack[stack.length-1]){
            stack.pop();
        }
      if(stack.length===0){
         
          result1.push(-1);
      }
    else{
          result1.push(stack[stack.length-1]);
      }
      stack.push(arr[i]);
    }
    // console.log(result1.join(" "));
}
var finalResult=[];
for(var i=0;i<arrsize;i++){
    if(result[i]>=result1[i])
    finalResult.push(result[i]);
    else
    finalResult.push(result1[i])
}
console.log(finalResult.join(" "));