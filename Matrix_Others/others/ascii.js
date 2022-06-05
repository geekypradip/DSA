var input=`13
abAZccdAZefTY`;
var newInput=input.split("\n");
var strSize=Number(newInput[0]);
var str=String(newInput[1]);
//var str=s.toLowerCase();
var count=0;
for(var i=0;i<strSize;i++) {
    if(str[i]===`A`&&str[i+1]===`Z`){
      count+=1;
    }

}
console.log(count/2);