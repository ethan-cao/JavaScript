

const p1Meetings = [
	[1230, 1300],
	[845, 900],
	[1300, 1500]
];

const p3Meetings = [
	[845, 915],
	[1515, 1545],
	[1235, 1245]
];

const schedules2 = [p1Meetings, p3Meetings];

console.log("Finding Available time slots: " + findAvailableTime(schedules2));
