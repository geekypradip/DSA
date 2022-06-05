// Query types:

// 1 X : Number X enter the Queue.

// 2 X : Number X enter the Stack.

// 3: Output whoever is in-front of the queue.

// 4: Output whoever is on-top of the stack

// 5: Which person is in-front of queue get out of queue and enters the stack.

// Note: If the Queue or Stack is empty then output "-1"
var input=`7
1 4
2 3
1 2
3
4
5
4`;
var queue=[],stack=[];
input=input.split("\n");
var operation=Number(input[0]);
for(var i=1;i<=operation;i++){
    var str=String(input[i]);
    var newStr=str.trim();
    var arr=newStr.split(" ").map(Number);
    if(arr[0]===1)
    pushForQueue(arr);
    else if(arr[0]===2)
    pushForStack(arr);
    else if(arr[0]===3)
    printqueueFront();
    else if(arr[0]===4)
    printstackTop();
    else if(arr[0]===5)
    queueToStack()
}
function pushForQueue(arr){
queue.push(arr[1]);
}
function pushForStack(arr){
stack.push(arr[1]);
}
function printqueueFront(){
    if(queue.length==0)
    console.log(-1)
    else
console.log(queue[0])
}
function printstackTop(){
    if(stack.length==0)
    console.log(-1)
    else
console.log(stack[stack.length-1])
}
function queueToStack(){
var ele=queue.shift();
stack.push(ele);
}