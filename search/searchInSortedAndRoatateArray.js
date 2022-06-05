let input=`20 12
18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`;
input=input.split("\n");
let sizeArr=input[0].split(" ").map(Number);
let arr=input[1].split(" ").map(Number)
let target=sizeArr[1];
let left=0,right=arr.length-1;                                                                                                                                  
let result=letfind(left,right,arr,target);
console.log(result)
function letfind(left,right,arr,target){
    while(left<=right){
    let middle=Math.floor((left+right)/2);
    if(arr[middle]===target)
    {
        return middle;
    }
    else{
        if(arr[left]>target&&arr[middle]>target&&arr[middle]>arr[left])
    left=middle+1;
    else if(arr[middle]<target && arr[middle]>=arr[left])
        left=middle+1;
    else if(arr[middle]<arr[left]&&arr[middle]<target&&arr[left]>target)
    left=middle+1;
    else
    right=middle-1;
    }
    
}
return -1;
}
