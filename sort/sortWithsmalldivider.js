var input =`5 6
12 18 17 65 46`;
var input =input.split("\n");
var sizeAndKvalue=input[0].split(" ").map(Number);
var arr=input[1].split(" ").map(Number);
var divider=[];
for(var i=0;i<sizeAndKvalue[0];i++){
    divider.push(arr[i]%sizeAndKvalue[1]);
}
var duplicateDividerArr=divider.slice(0);
console.log(duplicateDividerArr);
Sort(duplicateDividerArr);
console.log(duplicateDividerArr);
var finalArray=[];
for(var i=0;i<duplicateDividerArr.length;){
    var index=divider.indexOf(duplicateDividerArr[i])
   finalArray.push(arr[index]);
   divider.splice(index,1)
   arr.splice(index,1)
   duplicateDividerArr.splice(i,1)
}
console.log(finalArray);
function Sort(duplicateDividerArr){
    for(var i=0;i<duplicateDividerArr.length;i++){
        var min=i;
        for(var j=i+1;j<duplicateDividerArr.length;j++){
            if(duplicateDividerArr[min]>duplicateDividerArr[j]){
                min=j;
            }
        }
        var temp=duplicateDividerArr[i];
        duplicateDividerArr[i]=duplicateDividerArr[min];
        duplicateDividerArr[min]=temp;
    }
}