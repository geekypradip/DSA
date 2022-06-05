let input = `2
6
1 1 1 1 2 3
5
1 1 2 2 3`;
input = input.trim().split( "\n" );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++,pos+=2 ){
    let N = +input[ pos ];
    let arr = input[ pos + 1 ].trim().split( " " ).map( Number );
    let res = letFindMajority( N, arr );
    console.log(res)
}
function letFindMajority( N, arr ) {
    let obj = {};
    for ( let i of arr ) {
        if ( i in obj )
            obj[ i ] += 1;

        else
            obj[ i ] = 1;

    }
    for ( let i in obj ) {
        if ( obj[ i ] > N / 2 )
           return i
    }
    return -1;
}
