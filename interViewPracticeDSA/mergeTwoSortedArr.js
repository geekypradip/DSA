let arr1 = [ 4, 10, 11, 12, null, null, null];
let arr1OriginalLength = 4;
let arr2 = [ 3, 6, 7];
let arr2Length = 3;

let pointer1 = arr1OriginalLength - 1;
let pointer2 = arr2Length - 1;
let currentIndex = arr1OriginalLength + arr2Length - 1; //it's initially point to the arr1 arrays last index;
while ( pointer2 >= 0 ) {

    if ( arr1[ pointer1 ] > arr2[ pointer2 ] ) {
        arr1[ currentIndex ] = arr1[ pointer1 ];
        currentIndex -= 1;
        pointer1 -= 1;
     }
    else {
        arr1[ currentIndex ] = arr2[ pointer2 ];
        currentIndex -= 1;
        pointer2 -= 1;
  }
}

console.log( arr1)
