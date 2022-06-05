let arr = [ 1, 2, 3, 4, 5, 6 ];
let k = 7;
let count = 0;
let left = 0;
let right = arr.length - 1;
// let obj = {};
while ( left < right ) {
    if ( arr[ left ] + arr[ right ] > k )
        right -= 1;

    else if ( arr[ left ] + arr[ right ] < k )
        left += 1;
    else {

        count += 1;
        left += 1;
        right -= 1;
    }
}
console.log( count );
