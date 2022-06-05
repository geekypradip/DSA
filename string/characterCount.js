var strings="aaabbbbccc";
var count=1;
for(var i=0;i<strings.length;i++) {
    if(strings[i]===strings[i+1])
    {
        count++;
    }
    else
     {
         process.stdout.write(`${strings[i]}${count}`);
         count=1;
     }
}
console.log("")
