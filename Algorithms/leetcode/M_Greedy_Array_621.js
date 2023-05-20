/*
Given a char array representing tasks CPU need to do.
It contains capital letters A to Z where different letters represent different tasks.
Tasks could be done without original order. 

Each task could be done in one interval. For each interval, CPU could finish one task or be idle

However, there is a non-negative cooling interval n that means between two same tasks,
there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

The number of tasks is in the range [1, 10000], The integer n is in the range [0, 100].

### Example
Input: tasks = ["A","A","A","B","B","B"], n = 2 
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

*/
"use strict";

var leastInterval = function(tasks, n) {
	const counter = Array(26).fill(0);

	for (let task of tasks) {
		counter[task.charCodeAt(0) - "A".charCodeAt(0)]++;
	}

    counter.sort((a, b) => a - b);
    
    let mostFrequentTaskCount = 0;
    let mostFrequentTaskFrequency = counter[25];

    for (let i = 25; i >= 0; --i) {
        if (counter[i] !== mostFrequentTaskFrequency) {
            break
        }

        mostFrequentTaskCount++;
    }

    let intervalBetweenMostFrequentTaskCount = (mostFrequentTaskFrequency - 1) * (n - mostFrequentTaskCount + 1);
    let nonMostFrequentTaskCount = tasks.length - mostFrequentTaskCount * mostFrequentTaskFrequency;
    let idelIntervalCount = Math.max(0, intervalBetweenMostFrequentTaskCount - nonMostFrequentTaskCount);

    return tasks.length + idelIntervalCount;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8
