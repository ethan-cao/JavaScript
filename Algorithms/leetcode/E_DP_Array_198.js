/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping you
from robbing each of them is that adjacent houses have security system connected and
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house,
determine the maximum amount of money you can rob tonight without alerting the police.

### Example
[1,2,3,1] -> 4
Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

[2,7,9,3,1] -> 12
Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

### Review: 1

 */

var rob = function(nums) {
	if (nums.length === 0) {
		return 0;
	}

	if (nums.length === 1) {
		return nums[0];
	}

	const maxAmount = new Array(nums.length).fill(0);

	maxAmount[0] = nums[0];
	maxAmount[1] = Math.max(nums[0], nums[1]);

	for (let i = 2; i < nums.length; ++i) {
		maxAmount[i] = Math.max(nums[i] + maxAmount[i - 2], maxAmount[i - 1]);
	}

	return maxAmount[maxAmount.length - 1];
};


