let input=`9
4
10
9
16
21
21
23
11
25`;
input=input.split("\n");
let t=Number(input[0]);
for(let i=1;i<=t;i++){
    console.log(findSqureRoot(Number(input[i])));
}
function findSqureRoot(value){
    let left=0,right=value;
    while(left<=right){
        let middle=parseInt((left+right)/2);
        if(middle*middle===value)
        return parseInt(middle);
        // else if(findLenght(middle)>10)
        // return Math.floor(middle);
        else if(middle*middle<value){
            if((middle+1)*(middle+1)>value)
            return parseInt(middle);
            left=middle;
        }
        
        else{
            if((middle-1)*(middle-1)<value)
            return parseInt(middle-1);
             right=middle;
        }
       
    }
}
// function findLenght(value){
   
//         if(Math.floor(value) === value) return 0;
//         return value.toString().split(".")[1].length || 0; 
    
// }