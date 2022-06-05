let nums = [ 5, 7, 7, 8, 8, 10 ];
let  target = 8;
console.log( searchRange( nums, target ) );
 function searchRange(nums, target) {
    var left=0,right=nums.length-1;
    let first=-1,last=-1;
    while(left<=right){  //for find the start position
    let middle=Math.floor((left+right)/2);
        if(nums[middle]===target ||nums[middle]>target)
            right=middle-1;
        else
            left=middle+1;
    }
    first=left;

    left=0;right=nums.length-1;
    while(left<=right){  //for find the end position
    let middle=Math.floor((left+right)/2);
        if(nums[middle]===target ||nums[middle]<target)
            left=middle+1;
        else
            right=middle-1;
    }
    last=right;


    return [first,last]
};
