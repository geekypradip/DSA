 input = input.trim().split("\n");
let sizeArr=input[0].split(" ").map(Number);
let arr1 = input[1].split(" ").map(Number).sort((a, b) => a - b);
let arr2 = input[2].split(" ").map(Number).sort((a, b) => a - b);
console.log(letFind(arr1, arr2, sizeArr[0], sizeArr[1]));
function letFind(arr1, arr2, n1, n2) {
    let count = 0;
    let p = 0;
    let q = 0;
    while (p < n1 && q < n2) {
        if (Math.abs(arr1[p] - arr2[q]) <= 1) {
            count++;
            p++;
            q++;
        }
        else if (arr1[p] > arr2[q]) {
            q++;
        }
        else if (arr1[p] < arr2[q]) {
            p++;
        }
    }
    return count;
}