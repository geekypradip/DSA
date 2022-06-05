// Ashutosh has N friends and he wants to give a party to his C friends on his birthday. Ashutosh knows the amount he will have to spend on each of his N friends in party. Given the expense amount of each of the N friends, comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.
let input=`5 3 24
6 4 21 20 13`;
input=input.split("\n");
let constraintArr=input[0].split(" ").map(Number);
let friendsArr=input[1].split(" ").map(Number);
let isPossibleParty=letFind(constraintArr[1],constraintArr[2],friendsArr);
console.log(isPossibleParty)
function letFind(closeFriend,money,allFriend){
    allFriend.sort((a,b)=>a-b);
    let sum=0;
   for(let i=0;i<closeFriend;i++){
        sum+=allFriend[i];
   }
   if(sum<=money)
   return "Party";
   else
   return "Sad";
}