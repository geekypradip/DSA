// 3    *Total number of test Case
// abb
// aaab
// ababa
function letsgo(str){
    for(var i=0;i<str.length;i++){
        if(str[i]===str[i+1])
        {}
        else
        process.stdout.write(str[i]);
    }
}
var input=`3
abb
aaab
ababa`;
var newInput=input.split("\n");
var T=Number(newInput[0]);
for(var i=1;i<=T;i++){
    var str=String(newInput[i]);
    letsgo(str);
    console.log("")
}
// ab
// ab
// ababa