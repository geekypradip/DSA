// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


 var reverseStr = function(s, k) {
    s=s.split("");
    for(let i=0;i<s.length;i+=2*k){
         Rev(s,i,i+k-1)
    }
   return s.join("")


    function Rev(s,start,end){
        while(start<end){
            [s[start],s[end]]=[s[end],s[start]];
            start+=1;
            end-=1;
        }
    }
};
//input
let s = "abxatxabc";
let k = 3;
console.log( reverseStr( s, k ) );
