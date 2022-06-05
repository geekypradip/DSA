let input=`2
3
12 3 4
5 4 1
2
1 5
1 4`;
input=input.split("\n");
let t=Number(input[0]);
let pos=1;
for(let i=0;i<t;i++,pos+=3){
    let size=Number(input[pos]);
    let assArr=input[pos+1].trim().split(" ").map(Number);
    let gerryArr=input[pos+2].trim().split(" ").map(Number);
    let res=letFind(size,assArr,gerryArr);
    console.log(res)
}
function letFind(size,assArr,gerryArr){
    assArr.sort((a,b)=>a-b);
    gerryArr.sort((a,b)=>a-b);
    for(let i=0;i<size;i++){
        if(assArr[i]<=gerryArr[i])
        return "Train Hard Again";
    }
    return "Ash Finally Wins";
}