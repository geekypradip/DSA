// Amit went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street and unfortunately, all of them have only one samosa remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

// Find the maximum samosas that Amit can eat.
let input=`4 10
5 4 2 4`;
input=input.split("\n");
let sizeArr=input[0].split(" ").map(Number);
let arr=input[1].split(" ").map(Number);
let result=letFindMaximum(sizeArr[1],arr);
console.log(result)
function letFindMaximum(money,arr){
    arr.sort((a,b)=>a-b);
    let count=0;
    let sum=0;
    for(let item in arr){
       if(sum+arr[item]>money)
       return count;
       sum+=arr[item];
       count+=1;
    }
}