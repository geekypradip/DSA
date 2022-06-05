var input=`5 
3 2 5 1 4 
0`;
input=input.split("\n");

for(var i=0;input[i]!=0;i+=2){
   var testCase=input.slice(i,i+2);
  createFormat(testCase);
}
function createFormat(testCase){
    var arrsize=Number(testCase[0]);
    var str=String(testCase[1]);
    var whitespaceRemoveStr=str.trim();
    var arr=whitespaceRemoveStr.split(" ").map(Number);
   
    solvedLane(arr, arrsize);
}
function solvedLane(arr, arrsize){
    var lanestack=[];
    var acceptedValue=1;
    for(var i=0;acceptedValue!== arrsize;){
       if(acceptedValue==arr[i]){
           acceptedValue+=1;
          arr.splice(i,1)
       } 
       else
       {
           if(acceptedValue==lanestack[lanestack.length-1]){
            lanestack.pop();
            acceptedValue+=1;
           }
         else{
            console.log(`no`);
            break;
         }
           
       }
       
    }
    var i=0;
    var length=lanestack.length;
    for(i;i<length;i++){
        if(acceptedValue===lanestack[lanestack.length-1]){
            lanestack.pop();
            acceptedValue+=1;
        }
        else{
            console.log(`no`);
            break;
        }
    }
   if(i===length)
   console.log(`yes`);
}



/*test code*/
// input=input.split("\n");

// for(var i=0;input[i]!=0;i+=2){
//    var testCase=input.slice(i,i+2);
//   createFormat(testCase);
// }
// function createFormat(testCase){
//     var arrsize=Number(testCase[0]);
//     var str=String(testCase[1]);
//     var whitespaceRemoveStr=str.trim();
//     var arr=whitespaceRemoveStr.split(" ").map(Number);
   
//     solvedLane(arr, arrsize);
// }
// function solvedLane(arr, arrsize){
//     var lanestack=[];
//     var acceptedValue=1;
//     for(var i=0;i<arrsize;i++){
//        if(acceptedValue==arr[i]){
//            acceptedValue+=1;
//        } 
//        else
//        {
//            if(acceptedValue==lanestack[lanestack.length-1]){
//             lanestack.pop();
//             acceptedValue+=1;
//            }
         
//          lanestack.push(arr[i]);
//        }
       
//     }
//     var i=0;
//     var length=lanestack.length;
//     for(i;i<length;i++){
//         if(acceptedValue===lanestack[lanestack.length-1]){
//             lanestack.pop();
//             acceptedValue+=1;
//         }
//         else{
//             console.log(`no`);
//             break;
//         }
//     }
//    if(i===length)
//    console.log(`yes`);
// }