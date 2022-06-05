// Given non-negative integers representing an elevation map where the width of each bar is 1, calculate how much rain water will be trapped after it rains.

let input = `2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`;
input = input.split( "\n" );
let t = +input[ 0 ];
let pos = 1;
for ( let i = 0; i < t; i++, pos += 2 ) {
    let n = +input[ pos ];
    let arr = input[ pos + 1 ].trim().split( ' ' ).map( Number );
    console.log( letSeeHowMuchWatercanTrap( n, arr ) );
}
function letSeeHowMuchWatercanTrap( n, arr ) {
    let leftMinArr = [ arr[ 0 ] ];
    let rightMinArr = [ arr[ n - 1 ] ];
    for ( let i = 1; i < n; i++ ){
        leftMinArr.push(Math.max( arr[ i ], leftMinArr[ leftMinArr.length-1]))
    }
    for ( let i = n - 2; i >= 0; i-- ) {
        rightMinArr.push(Math.max( arr[ i ], rightMinArr[ rightMinArr.length-1]))
    }
    let sum = 0;
    for ( let i = 0; i < n; i++ ){
        sum += ( Math.min( leftMinArr[ i ], rightMinArr[ i ] ) ) - arr[ i ];
    }
    return sum;
}
