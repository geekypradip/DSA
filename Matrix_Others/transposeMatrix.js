var input=`1 2 3
4 5 6
7 8 9
1 2 3`;
var newInput=input.split("\n");
var matrix=[];
for(var i=0;i<newInput.length;i++){
    matrix.push(newInput[i].split(" ").map(Number));
}
var tras=``
for(var i=0;i<matrix[0].length;i++){
    for(var j=0;j<matrix.length;j++){
        process.stdout.write(`${matrix[j][i]} `);
        // tras+=matrix[j][i]+" ";
    }
    console.log("");
    // tras+="\n"
 }
// console.log(tras);
// var make=tras.split("\n");
// console.log(make)
// var traArr=[]
// for(var i=0;i<make.length-1;i++){
//    traArr.push(make[i].split(" ").map(Number));
// }
// console.log(traArr)