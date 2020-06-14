/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number
find all unique combinations in candidates where the candidate numbers sums to target
The same repeated number may be chosen from candidates unlimited number of times.

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

### Example
Input: candidates = [2,3,6,7], target = 7,
A solution set is: [  [7],  [2,2,3] ]

Input: candidates = [2,3,5], target = 8,
A solution set is: [  [2,2,2,2],  [2,3,3],   [3,5] ]

*/

const collectCombinations = (candidates, idx, target, combination, combinations) => {
    if (target === 0) {
        combinations.push([...combination]);
    } 
    
    for (let i = idx; i < candidates.length; ++i) {
        if (candidates[i] > target) {
            break;
        }
        
        combination.push(candidates[i]);
        collectCombinations(candidates, i, target - candidates[i], combination, combinations);
        combination.pop();
    }
};

var combinationSum = function(candidates, target) {
    const combinations = [];
    const combination = [];
    
    candidates.sort((a,b)=>a-b);
    
    collectCombinations(candidates, 0, target, combination,combinations);
    
    return combinations;
};