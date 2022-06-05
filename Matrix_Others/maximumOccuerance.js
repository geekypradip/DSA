var input=`11
1 1 1 1 0 0 0 2 2 2 2`;
var newInput=input.split("\n");
var sizeOfArray=Number(newInput[0]);
var arr=newInput[1].split(" ").map(Number);
var oldArray=arr.slice(0)
arr.sort();
var maximum_occueranceValue=null;
var maximumChecker=Number.MIN_SAFE_INTEGER;
var sameNumberOfOccurrences=[];
var count=1;
for(var i=0;i<sizeOfArray;i++){   
if(arr[i]===arr[i+1])
   count+=1;
else
  {
      
      if(count>maximumChecker){
          maximumChecker=count;
            maximum_occueranceValue=arr[i];
            sameNumberOfOccurrences.splice(0)
      }
      else if(count===maximumChecker){
        sameNumberOfOccurrences.push(arr[i-count])
          sameNumberOfOccurrences.push(arr[i])
      }
      count=1;
  }

}
if(sameNumberOfOccurrences.length==0)
console.log(maximum_occueranceValue);
else
{
    var beforeIndex=Number.MAX_SAFE_INTEGER;
    var beforeValue=null;
    for(var i=0;i<sameNumberOfOccurrences.length;i++){
           if(oldArray.indexOf(sameNumberOfOccurrences[i])<beforeIndex){
               beforeIndex=oldArray.indexOf(sameNumberOfOccurrences[i])
               beforeValue=sameNumberOfOccurrences[i];
           }
    }
    console.log(beforeValue)
}
