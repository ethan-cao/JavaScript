/*
Given a string, find the length of the longest substring without repeating characters.

### Example
"abcabcbb" -> 3,  "abc", with the length of 3.

"bbbbb"-> 1, "b", with the length of 1.

"pwwkew" -> 3, "wke", with the length of 3. answer must be a substring, "pwke" is a subsequence and not a substring.

### Review:

*/

var lengthOfLongestSubstring = function(s) {
	let longestLength = 0;

	if (s === null || s.length === 0) {
		return longestLength;
	}

	let lastAppearingIdx = new Array(26).fill(-1);

	let left = 0;
	let right = 0;

	while (right < s.length) {
		let char = s[right];

		if (lastAppearingIdx[char.charCodeAt(0) - "a".charCodeAt(0)] >= left) {
			left = lastAppearingIdx[char.charCodeAt(0) - "a".charCodeAt(0)] + 1;
		}

		lastAppearingIdx[char.charCodeAt(0) - "a".charCodeAt(0)] = right;

		longestLength = Math.max(longestLength, right - left + 1);

		right++;
	}

	return longestLength;
};

var lengthOfLongestSubstring1 = function(s) {
	let longestLength = 0;

	if (s === null || s.length === 0) {
		return longestLength;
	}

	let left = 0;
	let right = 0;

	let appearedChars = new Set();

	while (right < s.length) {
		let rightChar = s[right];
		let leftChar = s[left];

		if (appearedChars.has(rightChar)) {
			appearedChars.delete(leftChar);
			left++;
		} else {
			appearedChars.add(rightChar);
			right++;
		}

		longestLength = Math.max(longestLength, right - left);
	}

	return longestLength;
};
