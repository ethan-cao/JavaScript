/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

### Example
"abc" ->  3, Explanation: Three palindromic strings: "a", "b", "c".
"aaa" ->  6, Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

### Condition
The input string length won't exceed 1000.

*/
"use strict";

const countPalindrome = (s, left, right) => {
    let count = 0;
     
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        count++;
        
        left--;
        right++;
    }
    
    return count;
};

const countSubstrings = function(s) {
	let count = 0;

	for (let i = 0; i < s.length; ++i) {
		count += countPalindrome(s, i, i);
		count += countPalindrome(s, i, i + 1);
	}

	return count;
};