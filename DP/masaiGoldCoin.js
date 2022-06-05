let input=`12
2`;
input=input.split("\n");
for(let coin in input){
    console.log(letcalcuate(input[coin]));
}
function letcalcuate(N){
    if(N===0)
    return N;
    else{
        return letcalcuate(N-(N/2))+letcalcuate(N-(N/3))+letcalcuate(N-(N/4));
    }
}