/*
Given an array nums of n integers and an integer target,
are there elements a, b, c, and d in nums such that a + b + c + d = target?
Find all unique quadruplets in the array which gives the sum of target.

The solution set must not contain duplicate quadruplets.

### Example
nums = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[   [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]  ]

*/

var fourSum = function(nums, target) {
    const solution = [];

	nums.sort((a, b) => a - b);

    for (let a = 0; a < nums.length - 3; ++a) {

        if (a > 0  && nums[a] === nums[a-1]) {
            continue;
        }

        if (nums[a] * 4 > target) {
            break;
        }

        if (nums[a] + nums[nums.length-1] * 3 < target) {
            continue;
        }

        for (let b = a + 1; b < nums.length - 2; ++b) {
            let c = b + 1;
            let d = nums.length - 1;

            if (b > a + 1 && nums[b] === nums[b-1]) {
                continue;
            }

            if (nums[a] + nums[b] * 3 > target) {
                break;
            }

            if (nums[a] + nums[b] + nums[nums.length-1] * 2 < target) {
                continue;
            }

            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d];

                if (sum === target) {
                    solution.push([nums[a], nums[b], nums[c], nums[d]]);

                    while(nums[c] === nums[c+1]) c++;
                    c++;

                    while(nums[d] === nums[d-1]) d--;
                    d--;
                }  else  if (sum < target) {
                    c++;
                }  else {
                    d--;    
                }
            }

        }
    }

	return solution;1
};

console.log(fourSum([2,1,0,-1], 2))