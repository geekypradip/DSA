var input=`2
7
pingpin
8
pingping`;
input=input.split("\n");
var t=Number(input[0]);
var pos=1;
for(var i=0;i<t;i++,pos+=2){
    var strsize=Number(input[pos]);
    var strarr=input[pos+1].split("").map(String);
   lestCount(strsize,strarr);
}
function lestCount(strsize,strarr){}