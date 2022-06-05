var arr=[
[0,-4,-6,0,-7,-6],
[-1,-2,-6,-8,-3,-1],
[-8,-4,-2,-8,-8,-6],
[-3,-1,-2,-5,-7,-4],
[-3,-5,-3,-6,-6,-6],
[-3,-6,0,-8,-6,-7]
];
var max=Number.MIN_SAFE_INTEGER;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        var sum=0;
        if(i+2<=arr.length-1&&j+2<=arr.length-1){
       for(var k=i;k<i+3;k++){
           for(var l=j;l<j+3;l++){
              
                   if(k!=i+1)
                sum+=arr[k][l];
                else
                {
                    if(l==j+1)
                    sum+=arr[k][l];
                }
               
           }
        
       }
       if(sum>max)
       max=sum;
    }
    }
}
console.log(max);
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0