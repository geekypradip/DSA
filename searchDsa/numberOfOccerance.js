let input=`10 2
2 2 2 2 2 11 15 18 20 22`;
input=input.split('\n');
let sizesArr=input[0].split(" ").map(Number);
let itemArr=input[1].split(" ").map(Number).sort((a,b)=>a-b);
let searchValue=sizesArr[1];
let left=0;
let right=itemArr.length-1;
let count=0;
console.log(letSearch(left,right,itemArr));


function letSearch(left,right,itemArr){
    if(left>right)
    return count;
    
    let middle=Math.floor((left+right)/2);
    if(searchValue===itemArr[middle]){
        count+=1;
     letSearch(middle+1,right,itemArr);
    return letSearch(left,middle-1,itemArr);
    }
    
        
  if(itemArr[middle]>searchValue){ 
      right=middle-1;
      return letSearch(left,right,itemArr);
  }
       
    else{
        left=middle+1;
       return letSearch(left,right,itemArr);
    }
    


}