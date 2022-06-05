var input=`5
E 1 1
E 2 1
E 1 2
D
D`;
input=input.split("\n");
var t=Number(input[0]);
var queue=[];
for(var i=1;i<=t;i++){
    var str=String(input[i]);
    var removewhite=str.trim();
    var arr=removewhite.split(" ").map(String);
    if(arr[0]=="E"){
        Enqueue(arr[1],arr[2])
    }

    else if(arr[0]=="D"){
        Dequeue();
    }
}
function Enqueue(school,roll){
    var tempArr=[school,roll];
    if(queue.length!==0){
        var len=queue.length;
    for(var i=0;i<len;i++){
    if(queue[i][i]===school){
        queue.splice(i+1,0,tempArr);
        break;
    }
    else
    queue.push(tempArr)
    }
    }
    else{
        queue.push(tempArr);
    }
}
function Dequeue(){
   console.log(queue[0].join(" "));
   queue.shift();
}