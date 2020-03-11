/*
We are writing a tool to help users manage their calendars. 
Given an unordered list of times of day when people are busy, 
write a function that tells us the intervals during the day 
when ALL of them are available.

Sample input:

p1_meetings = [
  (1230, 1300),
  ( 845, 900),
  (1300, 1500),
]

p2_meetings = [
  ( 0, 15),
  ( 930, 1200),
  (1515, 1546),
  (1600, 2400),
]

p3_meetings = [
  ( 845, 915),
  (1515, 1545),
  (1235, 1245),
]

schedules1 = [p1_meetings, p2_meetings, p3_meetings]
schedules2 = [p1_meetings, p3_meetings]

Expected output:

findAvailableTime(schedules1)
 => [    15,  845 ],
    [  915,  930 ],
    [ 1200, 1230 ],
    [ 1500, 1515 ],
    [ 1546, 1600 ]

findAvailableTime(schedules2)
 => [    0,  845 ],
    [  915, 1230 ],
    [ 1500, 1515 ],
    [ 1545, 2400 ]
*/

"use strict";

const p1Meetings = [
  [1230, 1300],
  [ 845, 900],
  [1300, 1500]
]

const p2Meetings = [
  [ 0, 15],
  [ 930, 1200],
  [1515, 1546],
  [1600, 2400]
]

const p3Meetings = [
  [ 845, 915],
  [1515, 1545],
  [1235, 1245]
]

const schedules1 = [p1Meetings, p2Meetings, p3Meetings]
const schedules2 = [p1Meetings, p3Meetings]

const findAvailableTime = (schedules) => {
	let availability = [];

	let starts = [];
	let ends = [];

	for (let person of schedules) {
		for (let interval of person) {
			starts.push(interval[0]);
			ends.push(interval[1]);
		}
	}

	starts.sort((a, b) => a - b);
	ends.sort((a, b) => a - b);

	let start = starts[0];
	let end = ends[0];

	for (let i = 1; i < starts.length; i++) {
		if (starts[i] <= end) {
			end = Math.max(end, ends[i]);
		} else {
			availability.push([end, starts[i]]);

			start = starts[i];
			end = ends[i];
		}
	}

	if (starts[0] !== 0) {
    availability.unshift([0, starts[0]]);
	}

	if (ends[ends.length-1] !== 2400) {
		availability.push([ends[ends.length-1], 2400]);
	}

	return availability;
}

const r1 = findAvailableTime(schedules1);
const r2 = findAvailableTime(schedules2);

console.log("end")