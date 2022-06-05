let input=`4
3 2 1 5
4
1 3
2 4
1 4
3 3`;
input=input.split("\n");
let arrSize=+input[0];
let arr=input[1].trim().split(" ").map(Number);
let query=+input[2];
for(let i=3;i<3+query;i++){
    let qArray=input[i].trim().split(" ").map(Number);
    let result=letFindSum(qArray[0]-1,qArray[1]-1,arr);
    console.log(result);

}
function letFindSum(left,right,arr){
    if(left===right)
    return arr[left]
    let sum=0;
    while(left<=right){
        if(left===right)
        sum+=arr[left];
        else
        sum+=arr[left]+arr[right];
        left++;right--;
    }
    return sum;
}