function letsCheck(testCaseValue){
    var limit=false;
    var empty=-1;
    var tempStore=testCaseValue;
    for(var j=0;j<totalValues;j++){
        if(valueArr[j]>testCaseValue&&valueArr[j]>tempStore&&limit===false)
        {
            tempStore=valueArr[j];
            limit=true;
            empty=0;
        }
        else if(valueArr[j]>testCaseValue&&valueArr[j]<tempStore&&limit===true){
                      tempStore=valueArr[j];
        }
    }
    if(empty===-1)
    console.log(empty)
    else
    console.log(tempStore);
}
var input=`10 
13 89 81 69 81 63 71 66 73 81
2
65
15`;
var newInput=input.split("\n");
var totalValues=Number(newInput[0]);
var valueArr=newInput[1].split(" ").map(Number);
var numberOftestCase=Number(newInput[2]);
var position=3;
for(var i=0;i<numberOftestCase;i++){
var testCaseValue=Number(newInput[position]);
 letsCheck(testCaseValue);
 position+=1;
}

