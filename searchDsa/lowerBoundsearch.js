

let input=`7 1
1 1 4 5 6 7 8`;
input=input.split('\n');
let sizesArr=input[0].split(" ").map(Number);
let itemArr=input[1].split(" ").map(Number).sort((a,b)=>a-b);
let searchValue=sizesArr[1];
let left=0;
let right=itemArr.length-1;
console.log(letSearch(left,right,itemArr));


function letSearch(left,right,itemArr){
    let exist=null;
    while(left<=right){
    let middle=Math.floor((left+right)/2);
    if(searchValue===itemArr[middle]){
         right=middle-1;
         exist=middle;
    }
    
        
  else if(itemArr[middle]>searchValue)
  right=middle-1;
    else
    left=middle+1;
}
if(exist===null)
return -1;
return exist;
}
