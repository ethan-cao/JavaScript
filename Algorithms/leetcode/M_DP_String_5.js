/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

### Example
"babad" -> "bab", "aba" is also a valid answer.
"cbbd"-> "bb",The answer is "b", with the length of 1.

*/
"use strict";

// 360ms
var longestPalindrome0 = function(s) {
    let longestPalindrome = "";
    let isPalindrome = Array(s.length).fill(false).map(x => Array(s.length).fill(false));

    for (let end = 0; end < s.length; ++end) {
        for (let start = end; start >= 0; --start) {
          
            if (end - start + 1 <= 3) {
                isPalindrome[start][end] = s.charAt(start) === s.charAt(end);
            } else {
                isPalindrome[start][end] = s.charAt(start) === s.charAt(end) && isPalindrome[start+1][end-1];
            }

            if (isPalindrome[start][end] && end-start+1>longestPalindrome.length) {
                longestPalindrome = s.substring(start, end+1);
            }
        }
    }

    return longestPalindrome;
};


// 80ms
const getPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++
    }
    
    left++;
    right--;
     
    return s.substring(left, right+1);
}

var longestPalindrome = function(s) {
    let longestPalindrome = "";
    
    for (let i = 0; i < s.length; ++i) {
        const oddPalindrome = getPalindrome(s, i, i);
        const evenPalindrome = getPalindrome(s, i, i + 1);
        
        let longerPalindrome = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
        longestPalindrome = longerPalindrome.length > longestPalindrome.length ? longerPalindrome : longestPalindrome;
    }

    return longestPalindrome;
};


console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"