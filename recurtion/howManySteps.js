//leela can jumps 1-step,2-step,or 3-step so for reach the destination how many possible way to complete??
let input=`4`;
input=Number(input);
let result=letfindSteps(input);
console.log(result)
function letfindSteps(N){
    if(N===0)
    return 1;
    if(N<0)
    return 0;
    else{
        return letfindSteps(N-1)+letfindSteps(N-2)+letfindSteps(N-3);
    }
}