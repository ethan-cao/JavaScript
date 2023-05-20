/*
Given an array of n positive integers and a positive integer s,
find the minimal length of a contiguous subarray of which the sum ≥ s.
If there isn't one, return 0 instead.

### Example
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

*/

// 2 pointer
var minSubArrayLen = function(s, nums) {
	let left = 0;
	let right = 0;

	let hasMinLength = false;
	let minLength = nums.length;
	let sum = 0;

	while (right < nums.length) {
		sum += nums[right];

		while (sum >= s) {
			let length = right - left + 1;

			if (length === 1) {
				return 1;
			}

			minLength = Math.min(minLength, length);
			hasMinLength = true;

			sum -= nums[left];
			left++;
		}

		right++;
	}

	return hasMinLength ? minLength : 0;
};

// binary search
var binarySearch = function(sums, left, right, target) {
	let targetIdx = sums.length;

	while (left <= right) {
		let middle = Math.floor(left + (right - left) / 2);

		if (middle - 1 >= 0 && sums[middle] >= target && sums[middle - 1] < target ) {
			return middle;
		}

		if (sums[middle] >= target) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return targetIdx;
};

var minSubArrayLen = function(s, nums) {
	const sums = new Array(nums.length + 1).fill(0);
	for (let i = 1; i < sums.length; ++i) {
		sums[i] = sums[i - 1] + nums[i - 1];
	}

	let hasMinLength = false;
	let minLength = nums.length;

	for (let [left, sum] of sums.entries()) {
		let right = binarySearch(sums, left + 1, sums.length - 1, sum + s);

		if (right !== sums.length) {
			hasMinLength = true;
			minLength = Math.min(minLength, right - left);

			if (minLength === 1) {
				return 1;
			}
		}
	}

	return hasMinLength ? minLength : 0;
};

console.log(minSubArrayLen1(15, [1, 2, 3, 4, 5]));
