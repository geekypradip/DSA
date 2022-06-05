let arr = [ 1, 0, 1, 0, 0, 0, 1 ];
let pointer = 0;
for ( let item = 0; item < arr.length; item++ ) {
    if ( arr[ item ] === 0 ) {
        [ arr[ pointer ], arr[ item ] ] = [ arr[ item ], arr[ pointer ] ];
        pointer += 1;
    }
}
console.log( arr );
// let arr=[1,2,3,4,5,1,2];
// let obj={};
// for(i of arr){
//     if(i in obj){
//         obj[i]+=1;
//     }
//     else{
//         obj[i]=1;
//     }
// }
// for(item in obj){
//     if(obj[item]===1){

//         console.log(item)
//         break;
//     }
// }
