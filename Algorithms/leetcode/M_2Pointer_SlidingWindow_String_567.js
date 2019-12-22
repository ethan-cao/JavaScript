/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
In other words, one of the first string's permutations is the substring of the second string.

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

### Example
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Input:s1= "ab" s2 = "eidboaoo"
Output: False

### Review:

*/

var checkInclusion = function(s1, s2) {
	if (s1.length > s2.length) {
		return false;
	}

	let counter = new Array(26).fill(0);
	for (let i = 0; i < s1.length; ++i) {
		counter[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
	}

	let left = 0;
	let right = 0;

	while (right < s2.length) {
		let rightChar = s2[right];
		counter[rightChar.charCodeAt(0) - "a".charCodeAt(0)]--;
		right++;

		while (counter[rightChar.charCodeAt(0) - "a".charCodeAt(0)] < 0) {
			let leftChar = s2[left];
			counter[leftChar.charCodeAt(0) - "a".charCodeAt(0)]++;
			left++;
		}

		if (right - left == s1.length) {
			return true;
		}
	}

	return false;
};

var checkInclusion1 = function(s1, s2) {
	if (s1.length > s2.length) {
        return false;
    }

    var count = Array(26).fill(0);

	for (var i = 0; i < s1.length; i++) {
		count[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
		count[s2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

	if (isEmpty(count)) {
        return true;
    }

	for (var j = s1.length; j < s2.length; j++) {
		count[s2.charCodeAt(j) - "a".charCodeAt(0)]--;
		count[s2.charCodeAt(j - len1) - "a".charCodeAt(0)]++;
		if (isEmpty(count)) return true;
	}

	return false;

	function isEmpty(count) {
		for (var i = 0; i < 26; i++) {
			if (count[i] !== 0) return false;
		}
		return true;
    }

};