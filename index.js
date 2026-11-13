var findPeakElement = function(nums) {
    let l=0, r=nums.length-1;
    while(l<r){
        let mid = Math.floor(l+(r-l+1)/2);
        if(nums[mid]>nums[mid-1]){
            l=mid;
        }
        else{
            r=mid-1;
        }
    }
    return l;
};