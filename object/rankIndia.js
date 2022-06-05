var input=`5
Russia
USA
Japan
China
India`;
var newInput=input.split('\n');
var size=Number(newInput[0]);
//var arr=[];
var obj={};
for(var i=1;i<=size;i++){
    obj[i]=String(newInput[i]);
    
}
for(var i=1;i<=size;i++){
    if(obj[i]===`India`)
    {console.log(i);
    break;}
    
}