let input = `10 11
2 5 7 9 10 11 11 18 20 22`;
input = input.split( "\n" );
let [ n, k ] = input[ 0 ].split( " " ).map( Number );
let arr = input[ 1 ].split( " " ).map( Number );
console.log( letFindOccur( n, k, arr ) );
function letFindOccur( n, k, arr ) {
    let left = 0, right = n - 1;
    //let firstOccur = -1; let lastOccur = -1;
    while ( left <= right ) { //help to get first occurence;
        let middle = Math.floor( ( left + right ) / 2 );
        if ( arr[ middle ] === k || arr[ middle ] > k )
            right = middle - 1;
        else
            left=middle + 1;
    }
   let firstOccur = left;
    left=0,right=n - 1;
    while ( left <= right ) { //help to get last occurence;
        let middle = Math.floor( ( left + right ) / 2 );
        if ( arr[ middle ] === k || arr[ middle ] < k )
            left = middle + 1;
        else
            right = middle - 1;
    }
   let lastOccur = right;

    return {firstOccur,lastOccur};
}
