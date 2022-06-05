var input =`5
3 5 0 9 8`;
var newInput=input.split("\n");
var arrSize=Number(newInput[0]);
var arr=newInput[1].split(" ").map(Number);
for(var i=0;i<arrSize-1;i++){
    for(var j=0;j<arrSize-1;j++){
        if(arr[j]>arr[j+1]){
            swap(arr[j],arr[j+1]);
        }
    }
}
console.log(arr.join(" "));
function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    arr[j]=a;
    arr[j+1]=b;
}