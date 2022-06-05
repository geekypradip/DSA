var input=`2
1
5
5
1 2 1 3 2`;//11223
input=input.split("\n");
var t=Number(input[0]);
var pos=1
for(var i=1;i<=t;i++,pos+=2){
   var arrSize=Number(input[pos]);
   var arr=input[pos+1].split(" ").map(Number);
   letFind(arr,arrSize);
}
function letFind(arr,arrSize){
    arr.sort(function(a,b){
      return a-b;
    });
    //var u=null;
   // var count=1
    //var stack=[];
   
         var count=1;
        for(var i=0;i<arrSize;i++){
          if(arr[i]===arr[i+1]){
           count++;
          
          }
          else{
         if(count==1){
             console.log(arr[i]);
             break;
         }
         else
         count=1
          }
          
        }
   
}