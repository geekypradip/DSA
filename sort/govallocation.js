let input = `4 3 5
60 45 80 60
30 60 75`;

 input = input.split("\n");
// let [ users, Totalhouse, diff ] = input[ 0 ].split( " " ).map( Number );

let sizeArr=input[0].trim().split(" ").map( Number );
let wishHouseArr = input[1].split(" ").map(Number).sort((a, b) => b - a);
let hArr = input[2].split(" ").map(Number).sort((a, b) => b - a);
let result = findAns(sizeArr[0], sizeArr[1], sizeArr[2], hArr, wishHouseArr);
console.log(result);
function findAns(users, Totalhouse, diff, hArr, wishHouseArr) {
    let counter = 0;
    let flag1 = 0;
    let flag2 = 0;
    while (flag1 < users && flag2 < Totalhouse) {
        let check = hArr[flag2] - diff;
        let check2 = hArr[flag2] + diff;
        if ((wishHouseArr[flag1] >= check && wishHouseArr[flag1] <= check2) || wishHouseArr[flag1] == hArr[flag2]) {
            counter++;
            flag1++;
            flag2++;
        }
        else {
            if (wishHouseArr[flag1] > hArr[flag2]) {
                flag1++;
            }
            else
                flag2++;
        }
    }
    return counter;
}
