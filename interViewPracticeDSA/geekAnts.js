let input = 'mam';
input = input.split( '' );


const checkPalindrome = (input) => {
    let left = 0;
let right = input.length-1;
while ( left < right ) {
    if ( input[ left ] === input[ right ] ) {
        left = left + 1;
        right = right - 1;
    }
    else {
        return false;
    }
}
  return true;
}

console.log( checkPalindrome( input ) );
