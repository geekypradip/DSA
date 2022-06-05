
// It's party time in a hostel, and you are partying with your friends in the hostel's lobby. You can visualise the lobby as a 1-dimensional line (x-axis). All of you are scattered along that X-axis. Suddenly, you come to know that the warden is coming to the hostel. So, all of you want to hide inside a room. So, you will be given x-coordinates of hostel rooms as well as your current location (as x-axis coordinate). Anyone can stay at his position, move one step right from x to x + 1, or move one step left from x to x -1. Any of these moves consume1 minute. You have to find out the minimum time in which everyone in the lobby can go to any room and hide inside.
let input=`3
4 -4 2
4 0 5`;
input=input.split("\n");
let n=Number(input[0]);
let friendsArr=input[1].split(" ").map(Number);
let roomArr=input[2].split(" ").map(Number);
let result=letFind(friendsArr,roomArr);
console.log(result)
function letFind(friendsArr,roomArr){
    let result=Number.MIN_SAFE_INTEGER;
    friendsArr.sort((a,b)=>a-b);
    roomArr.sort((a,b)=>a-b);
    for(i in roomArr){
        if(Math.abs(friendsArr[i]-roomArr[i])>result)
        result=Math.abs(friendsArr[i]-roomArr[i]);
    }
    return result;
}


