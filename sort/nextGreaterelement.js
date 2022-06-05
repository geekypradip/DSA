var input =`1
4
1 3 2 4`;
input=input.split("\n");
var t=Number(input[0]);
var pos=1;
for(var i=1;i<=1;i++,pos+=2){
   var arrSize=Number(input[pos]);
   var arr=input[pos+1].split(" ").map(Number);
   letFind(arrSize,arr);
}
function letFind(arrSize,arr){
    var result=[];
    for(var i=0;i<arrSize;i++){
        if(i==arrSize-1){
            result.push(-1)
        }
        for(j=i+1;j<arrSize;j++){
            if(arr[j]>arr[i]){
                result.push(arr[j]);
                break;
            }
            else{
                if(arr[j]===arrSize-1){
                    result.push(-1)
                }
            }
        }
    }
    console.log(result.join(" "));
}