/*2                 *Number of road in  a city
6 3                 *Number of building and Rupees for watch per building for first Road
8 2 3 11 11 10                  *Height of buildings First Road
5 12                *Number of building and Rupees for watch per building for Second Road
12 20 39 45 89              *Height of Buildings of second road
*/
function letsCount(buildingAndRupeesArr,heightOfBuildingArr){
    var count=1;
    var noddyStand=heightOfBuildingArr[0];
    for(var i=1;i<buildingAndRupeesArr[0];i++){
        if(noddyStand<heightOfBuildingArr[i]){
            count+=1; 
            noddyStand=heightOfBuildingArr[i]
        }
       
    }
    return count*buildingAndRupeesArr[1];
}

var inputValue=`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`;
var inputLineSplit=inputValue.split("\n");
// console.log(inputLineSplit)
var numberOfRoadInCity=Number(inputLineSplit[0]);
// console.log(numberOfRoadInCity)
var position=1;
for(var i=0;i<numberOfRoadInCity;i++){
var buildingAndRupeesArr=inputLineSplit[position].split(" ").map(Number);
var heightOfBuildingArr=inputLineSplit[position+1].split(" ").map(Number);
// console.log(buildingAndRupeesArr)
// console.log(heightOfBuildingArr)
var noddyEarnMoney=letsCount(buildingAndRupeesArr,heightOfBuildingArr)
console.log(noddyEarnMoney);
position+=2;
}

