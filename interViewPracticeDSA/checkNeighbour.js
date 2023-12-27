let arr = [ 1, 4, 3, 2, 7 ]
let N = arr.length;
var m = [];
   if(arr[0]>arr[1]){
       m.push(1);
   }
   else{
       m.push(0)

   }

    for(var i=1;i<N-1;i++){
     if((arr[i]>arr[i-1]) && (arr[i]>arr[i+1])){
         m.push(2)
     }
     else if((arr[i]>arr[i-1]) || (arr[i]>arr[i+1])){
         m.push(1)
     }
     else{
         m.push(0)
     }
}

if ( arr[ N - 1 ] > arr[ N - 2 ] ) {
        m.push(1);
}
else{
   m.push(0)
}

  console.log(m)
