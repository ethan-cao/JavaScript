/*
Given an array of non-negative integers, you are initially positioned at index 0
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

### Example
[2,3,1,1,4] ->  true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

[3,2,1,0,4] ->  false
Explanation: always arrive at index 3. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

// Greedy
var canJump = function(nums) {
    let currentIdx = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (currentIdx < i)  {
            return false;
        }
        
        currentIdx = Math.max(currentIdx, i + nums[i]);
    } 
    
    return true;
};