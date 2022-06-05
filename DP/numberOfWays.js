// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

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