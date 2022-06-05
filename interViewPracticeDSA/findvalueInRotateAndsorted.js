let input = `7 6
3 4 6 7 9 1 2`;
input = input.split( "\n" );
let [ n, targetValue ] = input[ 0 ].split( " " ).map( Number );
let arr = input[ 1 ].trim().split( ' ' ).map( Number );
console.log( letFindPositionOfTargetvalue( arr, n, targetValue ) );
function letFindPositionOfTargetvalue( arr, n, targetValue ) {
    let left = 0, right = n - 1;
    while ( left <= right ) {
        let middle = Math.floor( ( left + right ) / 2 );
        if ( arr[ middle ] === targetValue )
            return middle;
        else if ( targetValue >= arr[ right ] )
            right = middle - 1;
        else if (  targetValue < arr[ right ] )
            left = middle + 1;

    }
}
