/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

### Example
"babad" -> "bab"
"aba" is also a valid answer.

"cbbd"-> "bb"
The answer is "b", with the length of 1.

### Related : 1, 516, 647

### Review

this asks for substring !!!

*/
"use strict";

// 360ms
var longestPalindrome0 = function(s) {
    let longestPalindrome = "";
    let isPalindrome = new Array(s.length).fill(false).map(x => new Array(s.length).fill(false));

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
var longestPalindrome = function(s) {
    let longestPalindrome = "";
    
    for (let i = 0; i < s.length; ++i) {
        const oddPalindrome = getPalindrome(s, i, i);
        const evenPalindrome = getPalindrome(s, i, i + 1);
        
        if (longestPalindrome.length < Math.max(oddPalindrome.length, evenPalindrome.length)) {
            longestPalindrome = oddPalindrome.length > evenPalindrome.length ? oddPalindrome :  evenPalindrome;
        }
    }

    return longestPalindrome;
};

var getPalindrome = (s, start, end) => {
    while (start >= 0 && end <s.length && s.charAt(start) === s.charAt(end)) {
        start--;
        end++
    }
    
    start++;
    end--;
     
    return s.substring(start, end+1);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"