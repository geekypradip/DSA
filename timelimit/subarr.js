function letscreateAllSubArray(arr,loopStratValue){
    if(loopStratValue===arrSizeAndKValues[0])
    return 0;
    else{
        var subArr=[];
        var sum=0;
        for(var i=loopStratValue;i<arrSizeAndKValues[0];i++){
         subArr.push(arr[i])
         sum+=arr[i];
         
            
            if(sum%arrSizeAndKValues[1]!==0){
                if(subArr.length>maxLength){
                // countArr=[];
                // countArr[0]=subArr.length;
                maxLength=subArr.length;
                count=1;
            }
            
            else if(subArr.length===maxLength)
           count++;
         }
        }
        letscreateAllSubArray(arr,loopStratValue+1)
    }
   
}
var input =`5 3
2 4 3 5 1`;
var newInput =input.split("\n");
var arrSizeAndKValues=newInput[0].split(" ").map(Number);
var arr=newInput[1].split(" ").map(Number);
var loopStratValue=0;
var maxLength=Number.MIN_SAFE_INTEGER;
var count=0;
letscreateAllSubArray(arr,loopStratValue);
console.log(count)
