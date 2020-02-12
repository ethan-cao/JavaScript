/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
You may assume no duplicate exists in the array.

### Example
 [3,4,5,1,2]  -> 1
 [4,5,6,7,0,1,2] -> 0

*/

var findMin = function(nums) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let middle = Math.floor(left + (right - left) / 2);

		if (left === middle) {
			return Math.min(nums[left], nums[right]);
		}

		if (nums[middle] > nums[right]) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}

	return null;
};

console.log(findMin([2, 1]));
