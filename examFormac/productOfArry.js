let input=`2
5
1 2 3 4 5
3
3 2 7`;
input=input.split("\n");
let t=+input[0];
let pos=1;
for(let i=0;i<t;i++,pos+=2){
    let n=+input[pos];
    var arr=input[pos+1].trim().split(" ").map(Number);
    let res=productArray(arr,n);
   console.log(res.join(" "))
}


function productArray(arr,n)
{
  let res=[];
    for(let i=0;i<n;i++){
        let temp=1;
        for(let j=0;j<n;j++){
            if(i!==j)
            temp*=arr[j];
        }
        res.push(temp)
    }
    return res;
}


