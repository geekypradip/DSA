var input =`masaischool`;
input=String(input);
console.log(len(input));
function len(input){
    // if we reach at the end of the string
    if (input == "")
    return 0;
else
    return len(input.substring(1)) + 1;
}