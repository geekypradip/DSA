
let input = `5
6 7 8 1 4`;
input = input.split( '\n' );
let N = +input[ 0 ];
let numArr=input[1].trim().split(" ").map(Number)
let left = 0;
let right = numArr.length - 1;

while (left < right) {
    let middle=Math.ceil((left+right)/2);
    if (numArr[left] < numArr[middle]) {
        left = middle;
    } else if (numArr[left] > numArr[middle]) {
        right = middle - 1;
    } else {
        // subtility here if there are duplicate elements in the array.
        // shift the left linearly
        left = left + 1;
    }
}
console.log( numArr[left]);
