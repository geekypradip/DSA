/*Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 */

let input = "ABC";
console.log( letFindTheColumnNumber( input ) );
function letFindTheColumnNumber( input ) {
    let sum = 0;
    let buffer = 1;
    for ( let i = input.length - 1; i >= 0; i-- ){
        sum += ( input.charCodeAt( i ) - 64 ) * buffer;
        buffer *= 26;
    }
    return sum;
}
