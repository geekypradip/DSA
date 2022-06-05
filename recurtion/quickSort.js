var input=`5
5 4 3 2 1`;
input=input.split("\n");
var size=Number(input[0]);
var arr=input[1].split(" ").map(Number);
var lo=0;
var hi=arr.length-1;
quick(arr,lo,hi);
console.log(arr)
function quick(arr,lo,hi){
    if(lo<hi){
        var p=partition(arr,lo,hi)
        quick(arr,lo,p-1)
        quick(arr,p+1,hi)
    }
}
function partition(arr,lo,hi){
    var pivot=arr[hi];
    var i=lo;
    for(var j=lo;j<hi;j++){
        if(arr[j]<pivot){
            //swap(arr[i],arr[j]);
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i+=1;
            //swap(arr[i],arr[hi])
        }
        
           
        
    }
    temp=arr[i];
    arr[i]=arr[hi];
    arr[hi]=temp;
    return i;
}
