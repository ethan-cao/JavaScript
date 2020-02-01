/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers

If such arrangement is not possible, it must rearrange it as the lowest possible order
(ie, sorted in ascending order).
The replacement must be in-place and use only constant extra memory.

### Example
1,2,3 → 1,3,2
for 1, 2 and 3, there are P(3,3) = 6 permutations : 123, 132, 213, 231, 312, 321
the given sequence is 123, the next lexicographically greater permutation is 132

3,2,1 → 1,2,3 :  3,2,1 is the last permutation, so return the 1st one  1,2,3
1,1,5 → 1,5,1

*/


const swap = (nums, a, b) => {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
};

const sort = (nums, idx) => {
    if (idx <= 0) {
        nums.sort((a,b)=> a-b);
        return;
    }
    
    for (let i = idx + 1; i < nums.length - 1; ++i) {
        
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] > nums[j]) {
                swap(nums, i, j);
            }
        }
    }
};

var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 0 ; --i) {
        let num = nums[i];
        
        let j = i - 1;
        while (j >= 0 && nums[j] >= num) {
            j--;        
        }
        
        let leftSmallerNum = j >= 0 ? nums[j] : null;
          
        if (leftSmallerNum !== null) {
            swap(nums, i, j);            
            sort(nums, j);
            return;
        }
        
        if (i === 0 && leftSmallerNum === null) {
            sort(nums, -1);
        }
    }
     
};

const nums = [1,3,2];
nextPermutation(nums);
console.log(nums);
