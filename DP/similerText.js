let input=`eziowiomkvrrdzx
orugiebaolddavd`;
input=input.split("\n");
let biratText=input[0].trim().split("");
let rohitText=input[1].trim().split("");
let result=letFindSimiler(biratText.sort(),rohitText.sort());
console.log(result)
function letFindSimiler(biratText,rohitText){
    let count=0;
    let biratCount=0,rohitCount=0;
    // console.log(biratCount,rohitCount)
    while(biratCount<biratText.length&&rohitCount<biratText.length){
        if(biratText[biratCount]===rohitText[rohitCount]){
            count+=1;biratCount+=1;rohitCount+=1;
        }
           
       else if(biratText[biratCount]<rohitText[rohitCount])
            biratCount+=1;
        
        else
        rohitCount+=1;
    }
    return count;
}