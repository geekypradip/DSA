var input='7';
input=Number(input);
var prev=0, next=1;
var result=0;
var count=1;
fibo(prev, next);
console.log(result);

function fibo(prev, next) {
if(count===input){
    return 0;
}
else{
 count++;
result=prev+next;
prev=next;
next=result;

fibo(prev, next);
}
}