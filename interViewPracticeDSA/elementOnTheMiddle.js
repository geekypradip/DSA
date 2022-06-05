//It's The BrootForse not the optimise solution

// Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.


let input = `8
12 2 9 4 3 6 7 8`;
input = input.split( '\n' );
let n = +input[ 0 ];
let arr = input[ 1 ].split( ' ' ).map( Number );
console.log( letFindTheMiddle( n, arr ) );

function letFindTheMiddle( n, arr ) {
    var validationPointer = true;

    for ( var i = 1; i < n - 1; i++ ){
        validationPointer = true;
        for ( let j = 0; j < i; j++ ){
            if ( arr[ j ] > arr[ i ] )
            {
                validationPointer = false;
                break;
            }
        }
        for ( let j = n - 1; j > i; j-- ){
            if ( validationPointer ) {
                if ( arr[ j ] < arr[ i ] ) {
                    validationPointer = false;
                    break;
                }
            }
            else
                break;
        }
           if ( validationPointer )
            return arr[ i ];

    }
    return -1;
}
