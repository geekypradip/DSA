let letscreate=(arr)=>arr.reduce(
    (subset,value)=>subset.concat(subset.map(set=>[value,...set])
    ),
    [[]]
);

let input=`2
3
1 5 2
5
3 5 6 1 8`;
input=input.split("\n");
let t=Number(input[0]);
let pos=1;
for(let i=0;i<t;i++,pos+=2){
    //let size=Number(input[pos]);
    let arr=input[pos+1].split(" ").map(Number);
     let res=letscreate(arr)
      console.log(res)
}

