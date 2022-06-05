var s = "ckilbkd";
console.log(lengthOfLongestSubstring(s));
function lengthOfLongestSubstring( s ) {
    if ( s.length === 0 )
        return 0;
    let memo=[];
    // console.log(Object.keys(obj).length)
    let max=1;
    let arr=s.split("").map(String);

    for ( let i = 0; i < arr.length; i++ ) {
        if ( memo.indexOf( arr[ i ] ) !== -1 ) {
            if ( memo.length > max )
                max = memo.length;
            memo.splice(0,memo.indexOf(arr[i])+1)
        }
        memo.push(arr[i]);
    }
    if ( memo.length > max )
        return memo.length;
    return max;

};
