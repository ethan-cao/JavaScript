/*
Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.

### Example
Input: nums = [1,2,3]
Output: [ [3], [1],  [2],  [1,2,3],  [1,3],  [2,3],  [1,2],  [] ]

*/

const collectSubsets = (nums, idx, subset, subsets) => {
    subsets.push([...subset]);
    
    for (let i = idx; i < nums.length; ++i ) {
        subset.push(nums[i]);
        collectSubsets(nums, i + 1, subset, subsets);
        subset.pop();
    } 
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];    
    const subset = [];
    
    nums.sort((a,b)=>a-b);
    
    collectSubsets(nums, 0, subset, subsets);
    
    return subsets;
};