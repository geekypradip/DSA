var inputValue=10;
var fullLength=(inputValue*2)+1;//for vertical *
for(var i=1;i<=inputValue;i++){
   for(var j=1;j<=inputValue;j++){
        process.stdout.write(" ");
   } 
   console.log("*")
}
for(var i=1;i<=fullLength;i++)
{
    process.stdout.write("*")
}
console.log("");
for(var i=1;i<=inputValue;i++){
    for(var j=1;j<=inputValue;j++){
         process.stdout.write(" ");
    } 
    console.log("*")
 }

//   *
//   *
// *****
//   *
//   *