let input=`6 4
1 2 5 4 0 6`;
input=input.split("\n");
let sizeArr=input[0].trim().split(" ").map(Number);
let arr=input[1].split(" ").map(Number);
let result=letRotate(sizeArr[1],arr);
console.log(result.join(" "))

function letRotate(k,arr){
    let len=arr.length;
    let mid=Math.floor(arr.length/2);
    if(mid>k){
        for(let i=arr.length-1;i>arr.length-mid;i--){
            let popValue=arr.pop();
            arr.unShift(popValue)
        }
    }
    else{
        for(let i=0;i<k%len;i++){
        let shiftValue=arr.shift();
        arr.push(shiftValue);
    }
    }
    
    return arr;
}