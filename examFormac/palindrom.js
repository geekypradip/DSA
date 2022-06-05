let input = `2
5 1
abdca
6 2
abcdef`;
input=input.split("\n");
let T = +input[0];
let pos = 1;
for (let i = 0; i < T; i++,pos += 2) {
   let sizeArr=input[pos].trim().split(" ").map(Number);
   let arr=input[pos+1].trim().split("").map(String);
    console.log(letFind(arr, sizeArr[0],sizeArr[1]));
    
}
function letFind(arr, n, k) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
        if (arr[left] === arr[right]) {
            left++;
            right--;
        }
        else {
            if (k) {
                arr[left] = arr[right];
                k -= 1;
            }
            else {
                return "False";
            }
        }
    }
    return "True";
}