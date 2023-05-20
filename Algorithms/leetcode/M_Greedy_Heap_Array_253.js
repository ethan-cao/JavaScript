/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required..

### Example
[[1,2],[2,3]] -> 1
[[1,2],[2,3],[3,4],[1,3]] -> 2
[[7,10],[2,4]] -> 1
[[0, 30],[5, 10],[15, 20]] -> 2

*/
"use strict";

const minMeetingRooms = (intervals) => {
	const starts = [];
	const ends = [];

	for (let interval of intervals) {
		starts.push(interval[0]);
		ends.push(interval[1]);
	}

	starts.sort((a, b) => a - b);
	ends.sort((a, b) => a - b);

	let roomCount = 0;

	let startIdx = 0;
	let endIdx = 0;

	while (startIdx < intervals.length) {
        if (starts[startIdx] < ends[endIdx]) {
            roomCount++;
        } else {
            endIdx++; 
        }

        startIdx++;
    }

	return roomCount;
};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));