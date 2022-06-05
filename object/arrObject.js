function MyArray(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })
}
// push
MyArray.prototype.push=function(value){
    this[this.length]=value;
    this.length++;
    return this.length;
}
//pop
// MyArray.prototype.pop=function(){
//     if(this.length===0)
//     return undefined;
//     var popppedElement=this[this.length-1];
//     delete this[this.length-1]
//     this.length--;
//     return popppedElement;
// }
// //reverse
// MyArray.prototype.reverse=function(){
// var revarr=new MyArray();
// for(var i=this.length-1;i>=0;i++){
//     revarr.push(this[i])
// }
// return revarr;
// }
// //Map
// MyArray.prototype.map=function(callback){
//     var result=new MyArray();
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var resultElement=callback(this[index],Number(index),this);
//             result.push(resultElement);
//         }
//     }
//     return result;
// }
var arr=new MyArray();
arr.push(5);
console.log(arr.length)
// arr.pop()

// arr.push(6);
// arr.pop()
// arr.push(7);
// arr.push(8);
// console.log(arr)
// var res=arr.map(function(el,index,arr){
//     return el*el;
// })
// console.log(res)
// console.log(arr.reverse())