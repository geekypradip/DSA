var input=
`2
15
128`;
input=input.split("\n");
var t=Number(input[0]);

for(var i=1;i<=t;i++){
    var arr=[]
    var binaryList=makeBinary(Number(input[i]));
    console.log(binaryList.reverse().join(""))
}
function makeBinary(N){
   
    if(N<2){
        arr.push(N)
        return arr;
    }
    else{
        arr.push(N%2);
        return makeBinary(Math.floor(N/2));
    }
}