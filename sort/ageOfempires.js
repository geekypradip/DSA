// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.

// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

// The building speed of the i-th worker is A[i].

// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.
var input=`2
1 3 1 2`;
input=input.split("\n");
var N=Number(input[0]);
var str=String(input[1]);
var removeWhiteSpaceStr=str.trim();
var arr=removeWhiteSpaceStr.split(" ").map(Number);
arr.sort(function(a,b){
    return a-b;
});
var sum=0;
 while(arr.length!=0){
     findLess(arr.splice(0,2))
 }
 function findLess(arr){
     if(arr[0]<=arr[1]){
        sum+=arr[0];
     }
     else
     sum+=arr[1];
 }
 console.log(sum)