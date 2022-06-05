var input=`3
1 2 3`;
input=input.split("\n");
var size=Number(input[0]);
var arr=input[1].split(" ").map(Number);
console.log(getSubet(arr));
var getSubet=
array=>array.reduce(
    (subset,value)=>subset.concat(subset.map(set=>[value,...set])),[[]]
);