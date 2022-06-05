let input = `2
6
1 3 5 2 7 4
1
6
1 3 5 2 7 4
2`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++,pos+=3 ){
    let N = +input[ pos ];
    let arr = input[ pos + 1 ].split( " " ).map( Number );
    let type = +input[ pos + 2 ];
    let res = letSeparateOddEven( N, arr, type );
    console.log(res)
}
function letSeparateOddEven( N, arr, type ) {
    let oddArr = [], evenArr = [];
    for ( let i of arr ) {
        if ( i % 2 )
            oddArr.push( i );
        else
            evenArr.push(i)
    }

    if ( type - 1 )
        return oddArr.sort((a,b)=>a-b).concat( evenArr.sort((a,b)=>a-b) ).join(" ");
    else
        return evenArr.sort((a,b)=>a-b).concat(oddArr.sort((a,b)=>a-b)).join(" ")
}
