var input=`2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`;
input=input.split("\n");
var t=Number(input[0]);
var pos=1;
for(var i=0;i<t;i++,pos+=2){
    var size=Number(input[pos]);
    var arr=input[pos+1].split(" ").map(Number)
   findLocalMaxima(arr)
}
function findLocalMaxima(arr){
    count=0
    if(arr.length<3){
        console.log(-1)
        return;
    }
 for(var i=1;i<arr.length-1;i++){
      if(arr[i]>arr[i-1]&&arr[i]>arr[i+1])  {
          count++;
      }    
 } 
 console.log(count)  
}
