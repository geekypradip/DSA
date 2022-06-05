var input=`1
5
3 5 0 9 8`;
input=input.split("\n");
var pos=1;
var testCase=Number(input[0]);
for(var i=0;i<testCase;i++,pos+=2){
    var arrsize=Number(input[pos]);
    var str=String(input[pos+1]);
    var whitespaceRemoveStr=str.trim();
    var arr=whitespaceRemoveStr.split(" ").map(Number);
    findThesignalCapacity(arr,arrsize);
}
function findThesignalCapacity(arr,arrsize){
    var stack=[],index=[],result=[];
    for(var i=0;i<arrsize;i++){
        while(stack.length!==0&&arr[i]>=stack[stack.length-1]){
            stack.pop();
            index.pop();
    }
    if(stack.length==0){
       result.push(i+1)
    }
    else{
      result.push((i+1)-index[index.length-1])
    }
    stack.push(arr[i]);
    index.push(i+1);
}
console.log(result.join(" "));
}