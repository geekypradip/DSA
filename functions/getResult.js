// 7 6   *Number of Question and maximum Difficulty of each question
// 4 3 7 6 7 2 2 *Difficulties of questions
function letsFind(numberOfQuestionAndMaxDifficulty,dOQuestion){
    var count=0;
    var skiped=0;
    for(var i=0;i<numberOfQuestionAndMaxDifficulty[0];i++){
           if(dOQuestion[i]<=numberOfQuestionAndMaxDifficulty[1]&&skiped<=1)
            count+=1;
           else
           skiped+=1;
    }
    return count;
}
var allInput=`7 6
4 3 7 6 6 2 2`;
var newInput=allInput.split("\n");
var numberOfQuestionAndMaxDifficulty=newInput[0].split(" ").map(Number);
var dOQuestion=newInput[1].split(" ").map(Number);
var result=letsFind(numberOfQuestionAndMaxDifficulty,dOQuestion);
console.log(result);