let s = "(){}[][]{{()}}{";
console.log(isValid(s))
function isValid( s ) {
    s = s.split( "" );
    let pattern={
        ")":"(",
        "}":"{",
        "]":"["
    };
    let stack=[];
   for(let i of s){
       if(i==='('|| i==='{' || i==='['){
           stack.push(i);
       }
       else{
           if(stack[stack.length-1]===pattern[i])
               stack.pop();
           else
               return false;
       }
   }
    return stack.length===0;
};
