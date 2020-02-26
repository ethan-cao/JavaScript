/*
Given a string s, find the longest palindromic subsequence's length in s.
You may assume that the maximum length of s is 1000.

### Example
"bbbab" -> 4, One possible longest palindromic subsequence is "bbbb".
"cbbd" -> 2, One possible longest palindromic subsequence is "bb".

*/
"use strict";

var longestPalindromeSubseq = function(s) {
    const maxLength = Array(s.length).fill(0).map(x=>Array(s.length).fill(0));
    
    for (let left = s.length - 1; left >= 0; --left) {
        maxLength[left][left] = 1; 
        
        for (let right = left + 1; right < s.length; ++right) {
            if (s.charAt(left) === s.charAt(right)) {
                maxLength[left][right] = 2 + maxLength[left + 1][right - 1];
            } else {
                maxLength[left][right] = Math.max(maxLength[left+1][right], maxLength[left][right-1]);
            }
        }
    }
    
    return maxLength[0][s.length-1];
};

console.log(longestPalindromeSubseq("aaa"));