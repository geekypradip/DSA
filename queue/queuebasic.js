// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)
var input=`5
E 2
D
D
E 3
D`;
input=input.split("\n");
var operation=Number(input[0]);
var queue=[];
for(var i=1;i<=operation;i++){
var str=String(input[i]);
var newString=str.trim();
var arr=newString.split(" ").map(String);
if(arr[0]==="E")
    Enqueue(arr)
else if(arr[0]=="D")
  Dequeue()
}
function Enqueue(arr){
queue.push(arr[1]);
console.log(queue.length);
}
function Dequeue(){
if(queue.length===0)
console.log(`-1 ${queue.length}`);
else{
    var deleted=queue.shift()
    console.log(`${deleted} ${queue.length}`)
}
}
