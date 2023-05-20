/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers

If such arrangement is not possible, it must rearrange it as the lowest possible order
(ie, sorted in ascending order).
The replacement must be in-place and use only constant extra memory.

### Example
1,2,3 → 1,3,2
for 1, 2 and 3, there are P(3,3) = 6 permutations : 123, 132, 213, 231, 312, 321
the given sequence is 123, the next lexicographically greater permutation is 132

3,2,1 → 1,2,3 :  3,2,1 is the last permutation, so return the 1st one  1,2,3
1,1,5 → 1,5,1
*/

const swap = (nums, a, b) => { [nums[a], nums[b]] = [nums[b], nums[a]]; };

const reverse = (nums, i = 0, j = nums.length - 1) => {
	while (i < j) {
		swap(nums, i, j);
		i++;
		j--;
	}
};

var nextPermutation = function(nums) {
	if (!nums || nums.length < 2) {
		return;
	}

	let turningPointIdx = null;
	for (let i = nums.length - 1; i > 0; --i) {
		if (nums[i - 1] < nums[i]) {
			turningPointIdx = i - 1;
			break;
		}
	}

	if (turningPointIdx === null) {
		reverse(nums);
	} else {
		let replacementIdx = null;
		for (let i = nums.length - 1; i > turningPointIdx; --i) {
			if (nums[i] > nums[turningPointIdx]) {
				replacementIdx = i;
				break;
			}
		}
		swap(nums, turningPointIdx, replacementIdx);
		reverse(nums, turningPointIdx + 1, nums.length - 1);
	}
};

// const nums = [1, 3, 2];    // 2,1,3
// const nums = [1, 4, 6, 66, 23, 21, 0];  // 1,4,21,0,6,23,66
const nums = [4, 2, 0, 2, 3, 2, 0]; // [4,2,0,3,0,2,2]
nextPermutation(nums);
console.log(nums);
