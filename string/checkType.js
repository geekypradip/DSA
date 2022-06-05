function letsCheck(numberOfValues,valuesArr){
  //var a=String("1234f5")
  var count=0;
  //var size=a.length;

  console.log(valuesArr)
  for(var i=0;i<numberOfValues;i++)
  if(valuesArr[i]>=0||valuesArr[i]<=0){
   count++;
  }
  if(count===numberOfValues)
  console.log("numbers")
    else if(count===0)
      console.log("chars")
    else
      console.log("alphanumeric")
  
}


var input=`3
5
ab2cd
5
acfgh
3
123`
var newInput=input.split("\n");
var testCase=Number(newInput[0]);
var position=1;
for(var i=0;i<testCase;i++){
  var numberOfValues=Number(newInput[position]);
  var valuesArr=newInput[position+1].split("").map(String);
  letsCheck(numberOfValues,valuesArr);
  position+=2;
}


    
    // alphanumeric