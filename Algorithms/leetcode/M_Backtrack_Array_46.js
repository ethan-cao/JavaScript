/*
Given a collection of distinct integers, return all possible permutations.

### Example
[1,2,3] -> [ [1,2,3],  [1,3,2],  [2,1,3],  [2,3,1],  [3,1,2],  [3,2,1] ]

*/

const collectPermutation = (nums, idx, permutation, permutations) => {
    if (idx === nums.length) {
        permutations.push([...permutation]);
        return;
    }
    
    for (let num of nums) {
        if (permutation.includes(num)) {
            continue;
        }
        
        permutation.push(nums);
        
        collectPermutation(nums, idx + 1, permutation, permutations);
        
        permutation.pop();
    }
};

var permute = function(nums) {
    const permutations = []; 
    const permutation = [];
    
    collectPermutation(nums, 0, permutation, permutations);
    
    return permutations;
};
