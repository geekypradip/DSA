var input=`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`;
var str=String(input);
var removeWhitespace=str.trim();
var newInput=removeWhitespace.split("").map(String);
var codeArr=[];
for(var i=0;i<newInput.length;i++){
    if(newInput[i]==="(")
    codeArr.push(1)
   else if(newInput[i]==="{")
     codeArr.push(2);
     else if(newInput[i]==="[")
     codeArr.push(3);
     else if(newInput[i]===")") 
     codeArr.push(1*5);
     else if(newInput[i]==="}") 
     codeArr.push(2*5);
     else if(newInput[i]==="]") 
     codeArr.push(3*5);
}
var stack=[];
if(codeArr.length%2!==0)
console.log("unbalanced")
else{
    for(var i=0;i<codeArr.length;i++){
        if(codeArr[i]===1||codeArr[i]===2||codeArr[i]===3)
        stack.push(codeArr[i]);
        else
         {
             if(stack[stack.length-1]===codeArr[i]/5)
             stack.pop();
             else
             {
                console.log("unbalanced") ;
                break;
             }
         }
    }
}
if(stack.length==0&&i===codeArr.length)
console.log("balanced")
