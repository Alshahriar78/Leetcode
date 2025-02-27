// not solved

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1
    while(left<=right){
        mid = Math.floor(left / right);
        if(nums[mid]=== target){
            return mid;
        }else if (nums[left ]< target){
            left = mid +1;
        }
        else if(right < target){
           right = mid -1 ;
        }
    }
    return -1;
};
console.log(searchInsert([1,2,3,5,7,8],4))