let input=`1
5 8
1 3 5 9 13`;
 input=input.split("\n");
 let t=Number(input[0]);
 let pos=1;
 for(let i=0;i<t;i++,pos+=2){
     let sizeArr=input[pos].split(" ").map(Number);
     let arr=input[pos+1].split(" ").map(Number).sort((a, b) => a - b);
    //  let result=letFindSum(sizeArr[1],arr);
    //  console.log(result)
    let target=sizeArr[1];
    
    let left=0,right=arr.length-1;
    let big=Number.MAX_SAFE_INTEGER;
    while(left<right){
     //console.log("hello")
        if(arr[left]+arr[right]>target&&arr[left]+arr[right]<=big){
             big=arr[left]+arr[right];
             right--;
        }
       
        else if(arr[left]+arr[right]>big){
             right--
        }
        else if(arr[left]+arr[right]<=target)
        left++
       
    }
  console.log(big)
 }
//  function letFindSum(target,arr)
//  {
    
//      let big=0;
//    let left=0,right=arr.length-1;
//    while(left<right){
//     console.log("hello")
//        if(arr[left]+arr[right]>target&&arr[left]+arr[right]<big){
//             big=arr[left]+arr[right];
//             right--;
//        }
      
//        else if(arr[left]+arr[right]>big){
//             right--
//        }
//        else if(arr[left]+arr[right]<=target)
//        left++
      
//    }
//   return big;
//  }