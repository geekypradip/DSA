let input=`2
6
1 1 1 1 2 3
5
1 1 2 2 3`;
input=input.split("\n");
let testCase=+input[0];
let pointer=1;
for(let i=0;i<testCase;i++,pointer+=2){
    let arrSize=+input[pointer];
    let arr=input[pointer+1].split(" ").map(Number);
    let res=letFindMajority(arr);
    // console.log(res);
    let max=Number.MIN_SAFE_INTEGER;
    let final=-1;
    for(let item in res){
       if(res[item]>arrSize/2 &&res[item]>max ) {
           max=res[item];
           final=item;
       }
    }
    console.log(final)
    // max===Number.MIN_SAFE_INTEGER?console.log(-1):console.log(max)
}
function letFindMajority(arr,obj={}){
        arr.sort((a,b)=>a-b);
        for(let i=0;i<arr.length;i++){
            if(arr[i] in obj)
            obj[arr[i]]+=1;
            else
            obj[arr[i]]=1;
        }
        return obj;
}