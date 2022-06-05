let input=`4 3
1 2 3`;
input=input.split("\n");
let sizeArr=input[0].trim().split(" ").map(Number);
let coinArr=input[1].trim().split(" ").map(Number);
console.log(coinArr);
let res=letFindTheWay(sizeArr[0]);
console.log(res);
function letFindTheWay(N,memo={}){
    if(N===0)return 1;
    if(N<0) return 0;
    if(N in memo)return memo[N];
    else memo[N]=letFindTheWay(N-coinArr[0],memo)+letFindTheWay(N-coinArr[1],memo)+letFindTheWay(N-sizeArr[2],memo);
    return memo[N]
}
//wrong answer will have to  fix it