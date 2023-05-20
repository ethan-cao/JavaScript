/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

### Example
[1,1,2] -> [  [1,1,2],   [1,2,1],   [2,1,1] ]

*/

const collectPermutations = (nums, idx, permutation, permutations, used) => {
	if (idx === nums.length) {
		permutations.push([...permutation]);
		return;
	}

	for (let i = 0; i < nums.length; ++i) {
		if (used[i]) {
			continue;
		}

		if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
			continue;
		}

		permutation.push(nums[i]);
		used[i] = true;

		collectPermutations(nums, idx + 1, permutation, permutations, used);

		permutation.pop();
		used[i] = false;
	}
};

var permuteUnique = function(nums) {
	const permutations = [];
	const permutation = [];
	const used = new Array(nums.length - 1).fill(false);

	collectPermutations(nums, 0, permutation, permutations, used);

	return permutations;
};
