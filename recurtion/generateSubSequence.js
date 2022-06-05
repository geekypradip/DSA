var input=`4
abcd`;
input=input.split("\n");
var t=Number(input[0]);
var str=String(input[1])
generateSubSequence(str,"");//main function we are calling orginal string and empty string
function generateSubSequence(str,res)
{
if(str.length==0)
{
console.log(res)
return
}
//generateSubSequence(str.substring(1),res)//character is not present[0]

generateSubSequence(str.substring(1),res+str.charAt(0))//character is present[1]
}

