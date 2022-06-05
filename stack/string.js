var input=`aaabccddd`;
var arr=input.split("").map(String);
var count=1;
var stack=[];
for(var i=0;i<arr.length;i++){
  if(arr[i]===arr[i+1])
  count+=1;
  else{
      if(count%2!==0)
     stack.push(arr[i]);
     count=1;
  }
}
if(stack.length)
console.log(stack.join(""));
else
console.log("Empty String");