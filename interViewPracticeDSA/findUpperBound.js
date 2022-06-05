let input = `10 3
0 2 4 4 5 5 7 7 9 10`;
input = input.split( "\n" );
let [ n, k ] = input[ 0 ].trim().split( " " ).map( Number );
let arr = input[ 1 ].trim().split( " " ).map( Number );
console.log( letFindUpperBound( arr, k ) );
function letFindUpperBound( arr, k ) {
    let left = 0, right = arr.length - 1;
    while ( left <= right ) {
        let middle = Math.floor( (left + right ) / 2);
        if ( arr[ middle ] > k && arr[ middle - 1 ] <= k ) {
            return middle;
        }
        else if ( arr[ middle - 1 ] > k )
            right = middle - 1;
        else
            left = middle + 1;
    }
}
