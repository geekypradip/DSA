// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function ( nums ) {
    let max = -Infinity;
    let local = 0;
    for(let i=0; i<nums.length; i++){
        local = Math.max(nums[i],local+nums[i]);
        max = Math.max(max,local);
    }
    return max;
};
let nums = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ];
console.log(maxSubArray(nums));
