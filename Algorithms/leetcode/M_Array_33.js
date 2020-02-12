/*
Shifted Array Search

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.

assume no duplicate exists in the array.
time complexity <= O(log n)

### Example
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Review : 1

*/


var search0 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);
        
        if (nums[middle] === target)  {
            return middle;
        }
        
        if (nums[left] <= nums[middle]) {
            if (target >= nums[left] && target < nums[middle])  {
                right = middle -1;
            } else {
                left = middle + 1;
            }
        } else {
            if (target > nums[middle] && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        
    }
    
    return -1;
};




const getPivot = (nums, start, end) => {
	if (start > end) {
		return -1;
	}

	while (start < end) {
		const middle = Math.floor(start + (end - start) / 2);

		if (nums[middle] > nums[end]) {
			start = middle + 1;
		} else {
			end = middle;
		}
	}

	return start;
};

const binarySearch = (nums, left, right, target) => {
	if (left > right) {
		return -1;
	}

	while (left < right) {
		const middle = Math.floor(left + (right - left) / 2);

		if (nums[middle] < target) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}

	return nums[left] === target ? left : -1;
};

var search = function(nums, target) {
	if (nums === null || nums.length === 0) {
		return -1;
	}

	const pivot = getPivot(nums, 0, nums.length - 1);
	const start = target > nums[nums.length - 1] ? 0 : pivot;
	const end = target > nums[nums.length - 1] ? pivot - 1 : nums.length - 1;

	return binarySearch(nums, start, end, target);
};