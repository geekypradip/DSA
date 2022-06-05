var arr=[1,2,3,-4,5];
var strarr=[""];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]>0)
    strarr.push(arr[i]);
    else
    strarr.push(0);
}
console.log(strarr.join(""));
console.log(typeof strarr[0])

// 12305 
// string