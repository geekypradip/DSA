let input=`2
3
1 50 50
50 50 50
1 50 50
2
2 3 50
1 2 50`;
input=input.split('\n');
let pos=1;
let T=+input[0];
for(let i=0;i<T;i++,pos+=numberOfShop+1){
    var shopArr=[];
    var numberOfShop=+input[pos];
    let secondPos=pos+1;
    for(let j=0;j<numberOfShop;j++,secondPos++)
    {
          let prodArr=input[secondPos].trim().split(" ").map(Number);
          shopArr.push(prodArr);
        }
        let res=letFindCost(shopArr);
        console.log(res)
}
function letFindCost(shopArr){
    let sum=0
  for(let i=0;i<shopArr.length;i++){
     shopArr[i].sort();
     sum+=shopArr[i][0];
  }
  return sum;
}