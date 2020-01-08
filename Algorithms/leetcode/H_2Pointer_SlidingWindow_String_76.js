/*
Given a string S and a string T,
find the minimum window in S which will contain all the characters in T in complexity O(n).

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

This is subsequence

### Example
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

### Review: 

*/

var minWindow = function(s, t) {
	if (t.length > s.length || s.length === 0 || t.length === 0) {
        return "";
    }

	const counter = new Array(128).fill(0);
	for (let char of t) {
		counter[char.charCodeAt(0)]++;
	}

	let left = 0;
	let right = 0;
    
    let requiredCharCount = t.length;
    
    let minLeft = 0;
    let minLength = Number.MAX_VALUE;
    
    while (right < s.length) {
        const rightChar = s.charAt(right);
        counter[rightChar.charCodeAt(0)]--;
        
        if (counter[rightChar.charCodeAt(0)] >= 0) {
            requiredCharCount--;          
        }
        
        while (requiredCharCount === 0 && left <= right) {
			
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }
             
            let leftChar = s.charAt(left);
            counter[leftChar.charCodeAt(0)]++;
            
            if (counter[leftChar.charCodeAt(0)] > 0) {
                requiredCharCount++;
            }
             
            left++;
        }
        
        right++;
    }
    
    return minLength === Number.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ADB")); // ADOB
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC