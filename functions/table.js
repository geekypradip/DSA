function countTable(num){
    for(var i=1;i<=10;i++)
    process.stdout.write(`${num*i} `)
}
var input=`2
3
4`;
var newInput=input.split("\n");
var T=Number(newInput[0]);
for(var i=1;i<=T;i++)
{
    var num=Number(newInput[i]);
    countTable(num);
    console.log("");
}