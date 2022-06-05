var str="aba";
var n=10;
repeatedString(str,n);
function repeatedString(s, n) {
    // Write your code here
var strArr=s.split("").map(String);
var rarray=[];
var j=0;
for(var i=0;i<n;i++,j++){
    if(j===strArr.length){
       j=0;
    }
     rarray.push(strArr[j]); 
   
}
console.log(rarray)
}