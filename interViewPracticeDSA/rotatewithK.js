let input = `3
3 1
1 2 3
2 2
1 2
2 3
1 2`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++,pos+=2 ){
    let [N,k ]= input[ pos ].trim().split(" ").map(Number);
    let arr = input[ pos + 1 ].trim().split( " " ).map( Number );
    let res = letRotateK( arr,k,N );
    console.log(res)
}

function letRotateK(arr, k,N)
{
 letReverse(arr,0,N-(k%N)-1);
   letReverse(arr,N-(k%N),N-1);
   letReverse(arr,0,N-1)
    return arr;
}
function letReverse(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start+=1;
        end-=1;
    }
 }
