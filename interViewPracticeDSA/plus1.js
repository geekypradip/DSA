let digits = [ 9 ];
console.log( plusOne(digits) );

function plusOne( digits ) {


    for(let i=digits.length-1;i>=0;i--){
        let temp=digits[i] +1;
        temp=String(temp).length;
       if(temp===1)
           {
              digits[i]+=1;
               return digits;
           }
        digits[i]=0;
    }
    digits.unshift(1)
    return digits
}
