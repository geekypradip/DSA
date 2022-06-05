let nums1 = [ 4, 1, 2 ], nums2 = [ 1, 3, 4, 2 ];
let obj = {};
let stack = [];

for ( let i = nums2.length - 1; i >= 0; i-- ){
    if ( nums2[ i ] < stack[ stack.length - 1 ] )
    {
        obj[ nums2[ i ] ] = stack[ stack.length - 1 ];
        stack.push(nums2[i])
    }
    else {
        while ( stack[ stack.length - 1 ] < nums2[ i ] && stack.length !== 0 ) {
            stack.pop()
        }
        if ( stack.length == 0 )
            obj[ nums2[ i ] ] = -1;
        else {
            if ( stack[ stack.length - 1 ] > nums2[ i ] ) {

            obj[ nums2[ i ] ] = stack[ stack.length - 1 ];

        }
        }
        stack.push(nums2[ i ])
    }
}
let result = [];
for ( let i of nums1 ) {
    result.push(obj[i])
}
console.log(result)
// Output: [-1,3,-1]
