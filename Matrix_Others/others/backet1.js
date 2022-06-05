var input =`3
{([])}
()
()[]`;
input=input.split("\n");
var t=Number(input[0]);
for(var i=1;i<=t;i++){
    var bracetArr=input[i].split("").map(String);
   var bracetcodeArr=[];
   for(var j=0;j<bracetArr.length;j++){
       if(bracetArr[j]===`(`)
       bracetcodeArr.push(1)
       else if(bracetArr[j]===`)`)
      bracetcodeArr.push(1*5)
      else if(bracetArr[j]===`{`)
      bracetcodeArr.push(2)
      else if(bracetArr[j]===`}`)
      bracetcodeArr.push(2*5)
      else if(bracetArr[j]===`[`)
      bracetcodeArr.push(3)
      else if(bracetArr[j]===`]`)
      bracetcodeArr.push(3*5)
   }
   check(bracetcodeArr);
}
function check(bracetcodeArr){
  if(bracetcodeArr.length%2!==0)
   console.log(`not balanced`)  
    else{
    var validChecker=true;
    var left=0,right=bracetcodeArr.length-1,leftClose=0;

    while(left<right){
        if(bracetcodeArr[left]===(bracetcodeArr[right]/5)){
           
            left++;right--;
        }
      else if(bracetcodeArr[leftClose]===(bracetcodeArr[leftClose+1]/5)){
        leftClose+=2;
        left+=2;
    }
        else{
            validChecker=false;
            break;
        }

    }
    if(validChecker)
        console.log(`balanced`)
        else
        console.log(`not balanced`)  
}
}