let input = `2
4 1
-1 2 1 -4
3 1
0 0 0`;
input = input.split( '\n' );
let T = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < T; i++, pos += 2 ){
    let [ N, K ] = input[ pos ].split( ' ' ).map( Number );
    let arr = input[ pos + 1 ].split( ' ' ).map( Number );
    let res=letFindMazority( N, K, arr );
    console.log( res );
}
function letFindMazority( N, K, arr ) {
    arr.sort( ( a, b ) => a - b );
    let maxSum = Number.MIN_SAFE_INTEGER;
    let colseestToK = Number.MAX_SAFE_INTEGER;
    for ( let i = 0; i < N; i++ ){
        let left = i + 1;
        let right = N - 1;
        while ( left < right ) {
            if ( arr[ i ] + arr[ left ] + arr[ right ] > maxSum && arr[ i ] + arr[ left ] + arr[ right ] < colseestToK ) {
                maxSum = arr[ i ] + arr[ left ] + arr[ right ];
                colseestToK = Math.abs( K - ( arr[ i ] + arr[ left ] + arr[ right ] ) );
            }
            else if ( arr[ i ] + arr[ left ] + arr[ right ] > maxSum && arr[ i ] + arr[ left ] + arr[ right ] > colseestToK ) {
                right -= 1;
            }
            else if ( arr[ i ] + arr[ left ] + arr[ right ] <=maxSum ) {
                left += 1;
            }


        }
    }
    return maxSum;
}
