/*
Given an array nums of integers, you can perform operations on the array.
In each operation, you pick any nums[i] and delete it to earn nums[i] points.
After, you must delete every element equal to nums[i] - 1 or nums[i] + 1. (dismiss)

start with 0 points. Return the maximum number of points you can earn by applying such operations.

The length of nums is at most 20000.
Each element nums[i] is an integer in the range [1, 10000].

### Example
nums = [3, 4, 2] -> 6
Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points. 6 total points are earned.

[2, 2, 3, 3, 3, 4] -> 9
Delete 3 to earn 3 points, deleting both 2's and the 4.
Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.

### Review:

*/

var deleteAndEarn = function(nums) {
	const SIZE = 10000;

	const sums = new Array(SIZE).fill(0);
	for (let num of nums) {
		sums[num] += num;
	}

	const maxPoints = new Array(SIZE).fill(0);
	maxPoints[0] = sums[0];
	maxPoints[1] = sums[1];

	for (let i = 2; i < SIZE; ++i) {
		maxPoints[i] = Math.max(sums[i] + maxPoints[i - 2], maxPoints[i - 1]);
	}

	return maxPoints[maxPoints.length - 1];
};

var deleteAndEarn1 = function(nums) {
    const SIZE = 10000;
    
    const sums = new Array(SIZE).fill(0);
    for (let num of nums) {
        sums[num] += num;
    }

    let count = 0;
    let skip = 0;
  
    for (let i = 0; i < SIZE; ++i) {
        let countI = sums[i] + skip;
        let skipI = Math.max(count, skip);

        count = countI;
        skip = skipI;
    }

    return Math.max(count, skip);
}

console.log(deleteAndEarn1([2, 2, 3, 3, 3, 4])); // 9