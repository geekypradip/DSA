var input=`2
8
2 2 3 3 5 6 6 7
9
3
30 10 20
15`;
var newInput=input.split("\n");
var t=Number(newInput[0]);
var pos=1;
for(var i=0;i<t;i++,pos+=3){
   var arrSize=Number(newInput[pos]);
   var arr=newInput[pos+1].split(" ").map(Number);
   var k=Number(newInput[pos+2])
 letsGet(arrSize,arr,k)
}
function letsGet(arrSize,arr,k){
    arr.sort(function(a,b){
        return a-b;
    });
   var maxValue=-1;
   var left=0,right=arrSize-1;
   while(left<right){
       if(arr[left]+arr[right]<k) {
        
           if(arr[left]+arr[right]>maxValue){
            maxValue=arr[left]+arr[right];
           
           }
           left++;
       }
       else {
       right--;
       }
     
   } 

   console.log(maxValue)
 
}