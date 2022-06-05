let input=`3 11
1 5 7`;
input=input.split("\n");
let sizeArr=input[0].trim().split(" ").map(Number);
let arr=input[1].trim().split(" ").map(Number);
let storeObj={}
let result=findBestSum(sizeArr[1],arr,storeObj);
console.log(result.length)
function findBestSum(targetValue,arr,storeObj){
    if(targetValue in storeObj)
    return storeObj[targetValue];
    if(targetValue===0)
    return [];
    if(targetValue<0)
    return null
    let bestCombination=null;
    for(let n of arr){
        let temp=targetValue-n;
        let storeCombination=findBestSum(temp,arr,storeObj);
        if(storeCombination!==null){
            let comb=[...storeCombination,n];
            if(bestCombination===null||comb.length<bestCombination.length){
                bestCombination=comb;
            }
        }
    }
    storeObj[targetValue]=bestCombination;
    return bestCombination;
}