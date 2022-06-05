let input=`32 47`;
input=input.trim().split(" ").map(Number);
let firstValue=input[0];
let result=letCheck(firstValue,input[1]);
console.log(result)
function letCheck(firstValue,targetValue){
let sum=0;
    while(firstValue<=targetValue)
    {    let temp=firstValue;
        let tempSum=0;
        while(temp!=0){
            let rem=temp%10;
            temp=Math.floor(temp/10);
            tempSum+=rem;
        }
        sum=tempSum+firstValue;
        if(sum===targetValue)
        return targetValue;
        else{

            firstValue=sum;
            sum=0;
        }
    }
    return -1;

}