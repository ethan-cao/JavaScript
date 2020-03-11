/*
Suppose you have a random list of people standing in a queue. The number of people is less than 1,100.

Each person is described by a pair of integers (h, k), where h is the height of the person
k is the number of people in front of this person who have a height >= h

Write an algorithm to reconstruct the queue. So that k is correct given the person's position in the queue.

### Example
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
->
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

*/

var reconstructQueue = function(people) {
    const currentQueue = [...people];  // copy the input
	const queue = [];

	currentQueue.sort((p1, p2) => (p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0]));

	for (let p of currentQueue) {
		queue.splice(p[1], 0, p);
	}

	return queue;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));