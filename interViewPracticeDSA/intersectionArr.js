// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

let nums1 = [ 4, 9, 5 ];
let nums2 = [ 9, 4, 9, 8, 4 ];
console.log(intersect(nums1, nums2))
function intersect( nums1, nums2 ) {
    let max;let min;
    let bigNums1=()=>{
        max=nums1;
        min=nums2;
    }
    let bigNums2=()=>{
        max=nums2;
        min=nums1;
        }
    nums1.length>nums2.length?bigNums1():bigNums2()
  let obj={};
    let res=[];
    for(let i of max){
        if(i in obj){
            obj[i]+=1;
        }
        else
            obj[i]=1;
    }
    for(let i of min){
        if(i in obj){
            res.push(i);
            obj[i]-=1;
            if(obj[i]===0)
                delete obj[i];
        }
    }
    return res;
};
