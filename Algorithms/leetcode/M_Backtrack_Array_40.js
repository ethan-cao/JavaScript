/*
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

### Example
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is: [[1,1,6],[1,2,5],[1,7],[2,6]]

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is: [ [1,2,2], [5] ]

*/

const collectCombinations = (candidates, target, idx, combination, combinations) => {
    if (target === 0) {
        combinations.push([...combination]);
    }
    
    for (let i = idx;  i < candidates.length; ++i) {
        if (candidates[i] > target) {
            break;
        }
        
        if (i > idx && candidates[i] === candidates[i-1]) {
            continue;
        }
        
        combination.push(candidates[i]);
        collectCombinations(candidates, target - candidates[i], i + 1, combination, combinations);
        combination.pop();
    }
    
};

var combinationSum2 = function(candidates, target) {
    const combinations = [];
    const combination = [];
    
    candidates.sort((a,b)=>a-b);
    
    collectCombinations(candidates, target, 0, combination, combinations);
    
    return combinations;
};