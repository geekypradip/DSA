let input=`5 0
2 -2 0 3 4`;
input=input.split('\n');
let sizesArr=input[0].split(" ").map(Number);
let itemArr=input[1].split(" ").map(Number).sort((a,b)=>a-b);
let searchValue=sizesArr[1];
let left=0;
let right=itemArr.length-1;
console.log(letSearch(left,right,itemArr));


function letSearch(left,right,itemArr){
    if(left>right)
    return -1;
    
    let middle=Math.floor((left+right)/2);
    if(searchValue===itemArr[middle])
     return 1;
        
  if(itemArr[middle]>searchValue){ 
      right=middle-1;
     return letSearch(left,right,itemArr);
  }
       
    else{
        left=middle+1;
        return letSearch(left,right,itemArr);
    }
    


}