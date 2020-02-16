/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),

Prove that at least one duplicate number must exist.
Answer : there are n distinctive value, there are n + 1 spots, there must be at least 1 duplicate number

Assume that there is only one duplicate number, but it could be repeated more than once.
find the duplicate one without modifying the array

### Example
[1,3,4,2,2] --> 2
[3,1,3,4,2] --> 3

*/
"use strict";

var findDuplicate = function(nums) {
	let appearedNums = new Set();

	for (let num of nums) {
		if (appearedNums.has(num)) {
			return num;
		} else {
			appearedNums.add(num);
		}
	}
};

var findDuplicate1 = function(nums) {
	let left = 1;
	let right = nums.length - 1;

	while (left <= right) {
		let middle = Math.floor(left + (right - left) / 2);

		if (left === right) {
			return left;
		}

		let count = 0;
		for (let num of nums) {
			if (num <= middle) {
				count++;
			}
		}

		if (count > middle) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	return -1;
};
