var input =`4
5
2 2 3 5 5
6
1 2 3 4 6 6
3
3 2 3
7
1 2 3 4 5 6 7`;
var newInput =input.split("\n");
var T=Number(newInput[0]);
 var pos=1;
 var noduplicate=true;
for(var i=1;i<=T;i++)
{
    var size=Number(newInput[pos])
    var arr=newInput[pos+1].split(" ").map(Number);
    for(var j=0;j<size;j++){
        for(var k=j+1;k<=size-1;k++){
            if(arr[j]===arr[k])
            {
                console.log("loop")
                noduplicate=false;
                break;
            }
            else
            {
               noduplicate=true;
            
            }
            
        }
    if(!noduplicate)
    break;
   }
   pos+=2;
   if(noduplicate)
   console.log("no loop")
}
// loop
// loop
// loop
// no loop