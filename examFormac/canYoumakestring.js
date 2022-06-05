let input=`3
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`;
input=input.split("\n");
let t=+input[0]
let pos=1;
for(let i=0;i<t;i++,pos+=2){
   let arr1=input[pos].trim();
   let arr2=input[pos+1].trim();
   // console.log(arr1)
   let result=letCheck(arr1,arr2);
   console.log(result);
}
function letCheck(arr1,arr2){
   while(arr1.length<=arr2.length)
   {
      arr1+=arr1;
   }
//   let A= arr1.split("").map(String).sort().join("");
//   let B= arr2.split("").map(String).sort().join("");
console.log(arr1)
//   if(A===B)
//   return "Yes";
//   else
//   return "No"
// console.log(A);
// console.log(B)
}