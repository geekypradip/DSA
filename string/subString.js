var string1="pradip";
var string2="l";
// var matchIndex=undefined;
var count =0;
for(var i=0;i<string1.length;i++){
    for(var j=0;j<string1.length;j++){
        if(string1[i+j]===string2[i]){
            count++;
            // matchIndex=i+j;
            break;
        }
    }
    break;
}
if(count)
console.log("Yes")
else
console.log("No");