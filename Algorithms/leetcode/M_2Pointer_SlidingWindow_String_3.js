/*
Given a string, find the length of the longest substring without repeating characters.

### Example
"abcabcbb" -> 3,  "abc", with the length of 3.

"bbbbb"-> 1, "b", with the length of 1.

"pwwkew" -> 3, "wke", with the length of 3. answer must be a substring, "pwke" is a subsequence and not a substring.

### Review:

*/

"use strict";

// 72 ms
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0;

    let left = 0;
    let right = 0;
    
    const lastAppearingIdx = new Array(128).fill(-1);
    
    while (right < s.length) {
		const rightChar = s.charAt(right);
		
		// since we recored the last appearing index, no need to use anther loop
        // while (lastAppearingIdx[rightChar.charCodeAt(0)] >= left && left < right) {
        //     const leftChar = s.charAt(left);
        //     lastAppearingIdx[leftChar.charCodeAt(0)] = -1;
        //     left++;
        // }
               
        if (lastAppearingIdx[rightChar.charCodeAt(0)] >= left ) {
            left = lastAppearingIdx[rightChar.charCodeAt(0)] + 1;
        }
       
        lastAppearingIdx[rightChar.charCodeAt(0)] = right;
        
        longestLength = Math.max(longestLength, right - left + 1);
        
        right++;
    }
    
	return longestLength;
};

// 84 ms
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