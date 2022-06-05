var input =`10
3 -9
-1 3 -1
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5
4 -9
-2 2 0 -4
2 3
0 0
8 2
5 -6 7 6 0 3 -4 8
1 -7
0
8 -6
4 7 4 -1 5 4 -6 -8
6 4
6 -1 -5 -5 2 -5
4 -4
0 -1 3 -2
1 3
-1`;
var newInput=input.split("\n");
var t=Number(newInput[0]);
var pos=1;

for(var i=0;i<t;i++){
  var sizeAndKValue=newInput[pos].split(" ").map(Number);
  var arr=newInput[pos+1].split(" ").map(Number)
  letsCheck(sizeAndKValue,arr);
  
  pos+=2;
}

function letsCheck(sizeAndKValue,arr){
    var isExist=false;
    arr.sort(function(a, b) {
        return a - b;
      });
    var left=0,right=sizeAndKValue[0]-1;
    while(left<right){
        if(arr[left]+arr[right]>sizeAndKValue[1])
           right--;
           else if(arr[left]+arr[right]<sizeAndKValue[1])
           left++;
           else{ isExist=true;
        break;}
        
    }   
    if(isExist)
  console.log(1)
  else
  console.log(-1)    
}