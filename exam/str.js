var input=`5
aabbc`;
input=input.split("\n");
var t=Number(input[0]);
var str=String(input[1]);
var newstr=str.trim();
var arr=newstr.split("").map(String);
letFind(arr,t);
function letFind(arr,t){
    var filterArr=[];
    for(var i=0;i<t;i++){
        if(filterArr.length==0){
            filterArr.push(arr[i])
        }
        else{
            if(filterArr[filterArr.length-1]===arr[i])
            filterArr.pop();
            else
            filterArr.push(arr[i])
        }
    }
    if(filterArr.length==0)
        console.log(-1);
        else
        console.log(filterArr.join(""))
    
}