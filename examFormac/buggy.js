var input = `3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`;
input=input.split("\n");
let t = +input[0];
let pos = 1;
for (let i = 0; i < t; i++, pos += 2) {
    let arr1 = input[pos].split(".").map(Number);
    let arr2 = input[pos + 1].split(".").map(Number);
    let result = findans(arr1, arr2);
    if(result)
    console.log("True")
    else
    console.log("False")
   
}
function findans(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] >arr1[i]) 
        return true;
        else if(arr1[i]===arr2[i])
        continue;
        else
        return false;
    }
    return true;
}


