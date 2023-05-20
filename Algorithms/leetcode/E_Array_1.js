/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

*/
"use strict";

// 60ms
/**
 * @param {array} nums 
 * @param {number} word2
 * @return {array}
 */
var twoSum = function(nums, target) {
    const indices = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        let requiredNum = target - num;;
        
        if (indices.has(requiredNum)) {
            return [i, indices.get(requiredNum)];
        }
        
        indices.set(num, i);
    }
     
    return[];
};

// 52ms
var twoSum1 = function(nums, target) {
    const indices = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        let requiredNum = target - num;;
        
        if (indices.has(num)) {
            return [i, indices.get(num)];
        }
        
        indices.set(requiredNum, i);
    }
     
    return[];
};


const result = twoSum([2, 7, 11, 15], 9);
console.assert(result.includes(2));
console.assert(true, result.length === 2, "wrong");
console.assert(result.includes(0), "wrong");
console.assert(result.includes(1), "wrong");

// Alternatively
console.log(result.length === 2);
console.log(result.includes(0));
console.log(result.includes(1));