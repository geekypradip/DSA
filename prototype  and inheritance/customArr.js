function MyArray(){
    Object.defineProperty(this,"length",{
      value:0,
      writable:true,
      enumerable:false,
    })
}
//push 
MyArray.prototype.push=function(value){
    this[this.length]=value;
    this.length++;
    return this.length;
}
//pop

MyArray.prototype.pop=function(){
    if(this.length==0){
        return undefined;
    }
    else{
        var popppedElement=this[this.length-1]
        delete this[this.length-1]
        this.length--;  
       return popppedElement;
    }
}
//reverse
MyArray.prototype.reverse=function(){
    var arr=new MyArray();
    for(var index=this.length-1;index>=0;index--)
    arr.push(this[index])
   return arr;
}
//print in array format
MyArray.prototype.print=function(){
    var arr= [];
for(i=0;i<this.length;i++){
    arr.push(this[i])
}
return arr;
}
var arr=new MyArray();
console.log(arr.push(5))
arr.push(7)

console.log(arr.reverse())
console.log(arr.print())
console.log(arr[0])//return the first element of array