class Solution {
    countZeroes(arr, n) {
        // write your code here
        let left=0,right=n-1;
        while(left<right)
        {
            let middle=Math.floor((arr[left]+arr[right])/2);
            var count=0;
            if(arr[middle]===0){
                right=middle-1;
                count=middle;
            }
            else if(arr[middle]>0)
            left+=1;
            else
            right=middle-1;
        }
        return n-count
    }
}
