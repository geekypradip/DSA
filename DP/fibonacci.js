//Find the nth fibonacci value 
let n=5;
let res=findRecurtion(n);
console.log(res)
var obj={}
function findRecurtion(N,obj={}){
    if(N<=2)
    return 1;
  if(N in obj)
  return obj[N]
    else{
     obj[N]= findRecurtion(N-1,obj)+findRecurtion(N-2,obj);
    }
return obj[N]
}