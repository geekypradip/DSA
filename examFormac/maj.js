let input=`2
6
1 1 1 1 2 3
5
1 1 2 2 3`;
var inp=input.split("\n");
var T=inp[0];
var pos=1;
for(let i=0;i<T;i++){
    let Size=Number(inp[pos]);
    
    let arr=inp[pos+1].split(" ").map(Number);
    let result=findAns(arr,Size/2);
    console.log(result)
    pos+=2;
}
function findAns(arr,k,obj={}){
   
        arr.sort((a,b)=>a-b);
        for(let i=0;i<arr.length;i++){
            if(arr[i] in obj)
            obj[arr[i]]+=1;
            else
            obj[arr[i]]=1;
        }
        let maximum=Number.MIN_SAFE_INTEGER;
        let ans=-1;
        for(let item in obj){
           if(obj[item]>k &&obj[item]>maximum ) {
            maximum=obj[item];
               ans=item;
           }
        }
        return ans;
    }
