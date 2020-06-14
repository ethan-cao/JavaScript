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

	const input = [...intervals];
	input.sort((a, b) => a[0] - b[0]);

	let start = input[0][0];
	let end = input[0][1];

	for (let i = 1; i < input.length; ++i) {
		let interval = input[i];
		let currentStart = interval[0];
		let currentEnd = interval[1];

		if (end >= currentStart) {
			end = Math.max(end, currentEnd);
		} else {
			mergedInterval.push([start, end]);

			start = currentStart;
			end = currentEnd;
		}
	}

	mergedInterval.push([start, end]);

	return mergedInterval;
};

var merge1 = function(intervals) {};
