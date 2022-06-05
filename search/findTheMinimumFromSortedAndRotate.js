let input=`8
0 8 9 -9 -7 -3 -2 -1`;
input=input.split("\n");
let size=Number(input[0]);
let arr=input[1].split(" ").map(Number);
let result=letfind(arr);
console.log(result)
function letfind(arr){
    let left=0,right=arr.length-1;
    if(arr[left]===arr[right])
        return arr[left];
    while(left<=right){
        let middle=Math.ceil((left+right)/2);
        if(arr[middle]<=arr[middle-1]&&arr[middle]<arr[middle+1]){
            return arr[middle];
        }
        else if(arr[middle]>arr[left]&&arr[middle]>arr[right])
        left=middle+1;
        else{
            right=middle-1;
        }
    }
}