/*
Given an array nums of n integers and an integer target,
find 3 integers in nums such that the sum is closest to target. Return the sum of the three integers.

You may assume that each input would have exactly one solution.
nums.length >= 3

### Example
nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

var threeSumClosest = function(nums, target) {
	let closestSum = nums[0] + nums[1] + nums[2];

	nums.sort((a, b) => a - b);

	for (let left = 0; left < nums.length - 2; ++left) {
		if (left > 0 && nums[left] === nums[left - 1]) {
			continue;
		}

		let middle = left + 1;
		let right = nums.length - 1;

		while (middle < right) {
			let sum = nums[left] + nums[middle] + nums[right];

			if (sum === target) {
				return sum;
			}

			if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
				closestSum = sum;
			}

			if (sum > target) {
				while (nums[right] === nums[right-1]) right--;
				right--;
			} else {
				while (nums[middle] === nums[middle + 1]) middle++;
				middle++;
			}
		}
	}

	return closestSum;
};
