/*A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let set=  new Set();
    while(n!=1 && !set.has(n)){
        set.add(n);
        n=makeDigitAndSqure(n);
    }
    return n===1;
    function makeDigitAndSqure(n){
        let sum=0
        while(n!=0){
            let rem=n%10;
            sum+=rem**2;
            n=Math.floor(n/10);
        }
        return sum;
    }
};
console.log(isHappy(19))
