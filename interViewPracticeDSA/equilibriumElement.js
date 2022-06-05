
// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.


let input = `5
3 3 5 5 1`;
input = input.split( "\n" );
let N = +input[ 0 ];
let arr = input[ 1 ].split( ' ' ).map( Number );
let res = letCheck( arr, N );
console.log( res );
function letCheck( arr,N ) {
    let leftSumArr = [], rightSumArr = [];
    let temp = 0;
    for ( let i of arr ) {
        temp += i;
       leftSumArr.push( temp );
    }
    temp = 0;
    for ( let i = N - 1; i >= 0; i-- ) {
        temp += arr[ i ];
        rightSumArr.push( temp );
    }
    rightSumArr.reverse()

    for ( let i = 0; i < N; i++ ){
        if ( leftSumArr[ i - 1 ] === rightSumArr[ i + 1 ] )
            return arr[ i ];
    }
    return -1;
}
