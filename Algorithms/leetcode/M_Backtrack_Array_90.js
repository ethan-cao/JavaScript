/*
Given a collection of integers that might contain duplicates, nums,
return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets

### Example
[1,2,2] -> [  [2],  [1],  [1,2,2],  [2,2], [1,2],  [] ]

*/

const collectSubsets = (nums, idx, subset, subsets) => {
    subsets.push([...subset]);
    
    for (let i = idx; i < nums.length; ++i) {
        
        if (i > idx && nums[i] === nums[i-1]) {
            continue;
        }
        
        subset.push(nums[i]);
        collectSubsets(nums, i + 1, subset, subsets);
        subset.pop();
    }
};

var subsetsWithDup = function(nums) {
    const subsets = [];
    const subset = [];
    
    nums.sort((a, b)=>a-b);
    
    collectSubsets(nums, 0, subset, subsets);    
   
    return subsets;
};