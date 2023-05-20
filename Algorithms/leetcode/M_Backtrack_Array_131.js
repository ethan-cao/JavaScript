/*
Given a string s, partition s such that every substring of the partition is a palindrome.
Return all possible palindrome partitioning of s.

### Example
"aab" -> [ ["aa","b"],  ["a","a","b"] ]

*/

const isPalindrome = (s) => {
	let left = 0;
	let right = s.length - 1;

	while (left <= right) {
		if (s.charAt(left) !== s.charAt(right)) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

const collectPartitions = (s, partition, tracker, idx) => {
	if (idx === s.length) {
		return partition.push([...tracker]);
	}

	for (let i = idx; i < s.length; ++i) {
		let substring = s.substring(idx, i + 1);

		if (isPalindrome(substring)) {
			tracker.push(substring);
			collectPartitions(s, partition, tracker, i + 1);

			tracker.splice(tracker.length - 1, 1);
		}
	}
};

var partition = function(s) {
	const partition = [];
	const tracker = [];

	collectPartitions(s, partition, tracker, 0);

	return partition;
};