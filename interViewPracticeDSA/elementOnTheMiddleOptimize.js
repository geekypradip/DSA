// Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.
let arr = [ 5, 6, 4, 3, 5, 7, 7, 8 ];
console.log( letFindTheMiddle( arr ) );
function letFindTheMiddle( arr ) {
    let leftLoopBigvalue = [ arr[ 0 ] ];
    let rightLoopBigvalue = [ arr[ arr.length - 1 ] ];
    for ( let i = 1; i < arr.length; i++ ) {
        leftLoopBigvalue.push( Math.max( leftLoopBigvalue[ leftLoopBigvalue.length - 1 ], arr[ i ] ) );
    }
    for ( let i = arr.length - 2; i >= 0; i-- ){
        rightLoopBigvalue.push( Math.min( rightLoopBigvalue[rightLoopBigvalue.length - 1], arr[ i ] ) );
    }
    rightLoopBigvalue.reverse()

    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[ i ] > leftLoopBigvalue[ i - 1 ] && arr[ i ] < rightLoopBigvalue[ i + 1 ] ) {
            return arr[ i]
        }
    }
    return -1;
}
