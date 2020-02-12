/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
The array may contain duplicates
(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
You are given a target value to search. If found in the array return true, otherwise return false.

### Example
nums = [2,5,6,0,0,1,2], target = 0 -> true

nums = [2,5,6,0,0,1,2], target = 3 -> false

Related : 33
*/


var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);
        
        if (nums[middle] === target)  {
            return true;
        }
        
        if (nums[left] < nums[middle]) {
            if (target >= nums[left] && target < nums[middle])  {
                right = middle -1;
            } else {
                left = middle + 1;
            } 
        } else if (nums[left] > nums[middle]) {
            if (target > nums[middle] && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            left++;
        }
        
    }
    
    return false;
};