/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:
Input: n = 4, k = 2
Output:
[ [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4], ]

*/

"use strict";

const collectCombinations = (start, end, size, combination, combinations) => {
    if (size === 0) {
        combinations.push([...combination]);
        return;
    }
    
    for (let i = start; i <= end - size + 1; ++i) {
        combination.push(i);
        collectCombinations(i + 1, end, size - 1, combination, combinations);
        combination.pop();
    }
};

const combine = function(n, k) {
    const combinations = [];
    const combination = [];
    
    collectCombinations(1, n, k, combination, combinations);
    
    return combinations;
};

