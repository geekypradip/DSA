// Given a sorted array with repeating integers. You need to find the first occurence , last occurence and count of a given key in the array. USE ONLY BINARY SEARCH. Your algorithm should run in LogN time.If element is not present print -1 -1 0.

let input = `6
1 1 1 2 2 2
1`;
input = input.split( "\n" );
let n = +input[ 0 ];
let arr = input[ 1 ].trim().split( ' ' ).map( Number );
let key = +input[ 2 ];
let result = letFindFoccAndLatOccAndCount( arr, n, key );
console.log( result );
function letFindFoccAndLatOccAndCount( arr,n,key ) {
    var left = 0, right = n - 1;
    let returnArr = [];
    while ( left <= right ) { //find first occurence
        var middle = Math.floor( ( left + right ) / 2 );
        if ( arr[ middle ] == key )
            right = middle - 1;
        else if ( arr[ middle ] > key ) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    returnArr.push( left )

     left = 0, right = n - 1;
    while ( left <=right ) { //find last occurence
         middle = Math.floor( ( left + right ) / 2 );
        if ( arr[ middle ] === key )
            left = middle + 1;
        else if ( arr[ middle ] > key ) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    returnArr.push(right)
   returnArr.push(Math.abs(returnArr[0]-returnArr[1])+1)
    return returnArr;
}
