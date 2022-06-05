let input=`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`;
input=input.split('\n');
let testCase=Number(input[0]);
let position=1;
for(let i=1;i<=testCase;i++,position+=2){
    let sizeArr=input[position].split(" ").map(Number);
    let arr=input[position+1].split(" ").map(Number);
    let results=letFindSum(sizeArr[1],arr);
    console.log(results.join(" "));
}
function letFindSum(target,arr){
    let resarr=[]
        let left=0,right=arr.length-1;
         while(left<=right){
             let middle=Math.floor((left+right)/2);
            if(arr[middle]>=target||(arr[middle]+arr[left])>target){
                right=middle-1;
            }
            
             else if(arr[left]+arr[right]>target){
                    right=right-1;
                }
                else if((arr[right]+arr[left])<target){
                    left=left+1;
                }
                else{
                    resarr.push(left,right)
                    return resarr;
                }
            }
            if(resarr.length===0){
                resarr.push(-1,-1);return resarr;
            }   
}