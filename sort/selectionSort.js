var input =`5
3 5 0 9 8`;
var  newInput=input.split("\n");
var arrSize=Number(newInput[0]);
var arr=newInput[1].split(" ").map(Number);

for(var i=0;i<arrSize-1;i++){
    var min=i;
  for(var j=i+1;j<arrSize;j++){
      if(arr[j]<arr[min]){
          min=j;
      }
  }
  var temp=arr[i];
 arr[i]=arr[min];
 arr[min]=temp;
}
console.log(arr.join(" "));
console.log(`a`>`b`);