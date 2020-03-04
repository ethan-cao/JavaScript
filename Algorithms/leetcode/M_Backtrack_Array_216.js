import { start } from "repl";

/*
Find all possible combinations of k numbers that add up to a number n,
given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

All numbers will be positive integers.
The solution set must not contain duplicate combinations.

### Example
k = 3, n = 7  -> [[1,2,4]]
k = 3, n = 9  -> [[1,2,6], [1,3,5], [2,3,4]]

*/

const collectCombinations = (current, end, size, sum, combination, combinations) => {
    if (sum === 0 && size === 0) {
		combinations.push([...combination]);
		return;
	}

	for (let i = current; i <= end; ++i) {
		combination.push(i);
		collectCombinations(i + 1, end, size - 1, sum - i, combination, combinations);
		combination.pop();
	}
};

var combinationSum3 = function(k, n) {
	const combinations = [];
	const combination = [];

	collectCombinations(1, 9, k, n, combination, combinations);

	return combinations;
};