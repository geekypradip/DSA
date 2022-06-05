var arr1=[1,3,36,72,4,6,7];
var arr=arr1.slice(0);
var arr2=arr1.slice(0)
for(var i=0;i<arr.length-1;i++){
    var min=i;
    var max=i
    for(var j=min+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
          if(arr2[j]>arr2[max]){
              max=j;
        }

    }
    var temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
   temp=arr2[i];
   arr2[i]=arr2[max]
   arr2[max]=temp;
}
console.log(arr);
console.log( arr2 )
