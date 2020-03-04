/*
Given a collection of intervals, merge all overlapping intervals

### Example
[[1,3],[2,6],[8,10],[15,18]] --> [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

[[1,4],[4,5]] --> [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

"use strict";

var merge = function(intervals) {
	const mergedInterval = [];

	if (intervals === null || intervals.length === 0) {
		return mergedInterval;
	}

	intervals.sort((i1, i2) => i1[0] - i2[0]);

	let start = intervals[0][0];
	let end = intervals[0][1];

	for (let i = 1; i < intervals.length; ++i) {
		const interval = intervals[i];

		if (end >= interval[0]) {
			end = Math.max(end, interval[1]);
		} else {
			mergedInterval.push([start, end]);

			start = interval[0];
			end = interval[1];
		}
	}

	mergedInterval.push([start, end]);

	return mergedInterval;
};

var merge1 = function(intervals) {
    
}