// not solved

var searchInsert = function(nums, target) {
    let n = nums.length;
    for(let i =0; i<n ; i++){
       if(nums[i]==target){
          
           return i;
       }
       else if(nums[i]< target && nums[i+1]>target){
        nums.length ++;
        nums[i+1]= target;
        for( let j = i ; j > 0 ; j-- ){
            nums[i+1]=nums[i];
        }
        
          
       }
    }
    return nums;
    
};
console.log(searchInsert([1,2,3,5,7,8],4))