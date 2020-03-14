/*
Given a collection of intervals,
find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

### Example
[[1,2],[2,3],[3,4],[1,3]] -> 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

[[1,2],[1,2],[1,2]] -> 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

[[1,2],[2,3]] -> 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

*/

"use strict";

var eraseOverlapIntervals = function(intervals) {
	if (intervals.length < 2) {
		return 0;
	}
    
	intervals.sort((i1, i2) => i1[0] - i2[0]);

	let count = 0;
    let end = intervals[0][1];
    // let end = Number.MIN_SAFE_INTEGER;

	for (let i = 1; i <intervals.length; ++i) {
		const interval = intervals[i];

		if (end > interval[0]) {
			count++;
			end = Math.min(end, interval[1]);
		} else {
			end = interval[1];
		}
	}

	return count;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[-100,-2],[5,7]])); // 1 
console.log(eraseOverlapIntervals([[0,1],[3,4],[1,2]]));  // 0