let input = `4
eio
masaischool
ubcdefghioel
rhythm`;
input=input.split("\n");
let t = +input[0];
let vowels = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
for (let i = 1; i <= t; i++) {
    let result = findans(input[i], input[i].length);
    console.log(result);
}
function findans(str, n) {
    let vowelsStr = '';
    let consonentStr = '';
    for (let i = 0; i < n; i++) {
        if (str[i] in vowels) {
            vowelsStr += str[i];
        }
        else
            consonentStr += str[i];
    }
    return vowelsStr + consonentStr;
}