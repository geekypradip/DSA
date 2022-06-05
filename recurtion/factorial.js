var input=`5`;
var n=Number(input);
var result=1;
if(n==0)
  console.log(1)
  else{
fac(n);
console.log(result)
  }
function fac(n){
if(n==1)
return 0;
else{
  result*=n;
  fac(n-1);
}
}