function letFindProduct(numberOfValue, arr){
    var sum=1;
   for(var i=0;i<numberOfValue;i++){
       sum*=arr[i];
      
   }
   calucate(sum,numberOfValue,arr);
}
function calucate(sum,numberOfValue,arr){
  for(var i=0;i<numberOfValue;i++){
      process.stdout.write(`${sum/arr[i]} `);
  }
}

var input = `2
5
1 2 3 4 5
3
3 2 7`;
 var newInput =input.split("\n");
//  console.log(newInput)
var totalTestCase=Number(newInput[0]);
var position=1
for(var i=0;i<totalTestCase;i++){
      var numberOfValue=Number(newInput[position]);
      var arr=newInput[position+1].split(" ").map(Number);
    //   console.log(numberOfValue)
    //   console.log(arr)
    letFindProduct(numberOfValue,arr);
      position+=2;
      console.log("")
}