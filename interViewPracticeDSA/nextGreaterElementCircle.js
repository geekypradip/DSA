// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
//https://leetcode.com/problems/next-greater-element-ii/
let nums = [1,2,3,4,3];
let res = [], stack = [];
for ( let i = 1; i <= 2; i++ ){  //static two Time only
    res = [];
    for ( let i = nums.length - 1; i >= 0; i-- ){
        if ( stack.length === 0 )
            res.push( -1 );
        else {
            if ( stack[ stack.length - 1 ] > nums[ i ] )
                res.push( stack[ stack.length - 1 ] );
            else {
                while ( stack[ stack.length - 1 ] <= nums[ i ] && stack.length !== 0 ) {
                    stack.pop();
                }
                if ( stack.length === 0 )
                    res.push( -1 );
                else
                    res.push(stack[stack.length - 1])
            }
        }
        stack.push( nums[ i ] );
    }
}


console.log( res.reverse() );
