/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
In other words, one of the first string's permutations is the substring of the second string.

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

This is substring

### Example
Input: s1 = "ab" s2 = "eidbaooo" ->  True
Explanation: s2 contains one permutation of s1 ("ba").

Input:s1= "ab" s2 = "eidboaoo" ->  False

### Review:

*/

// 68ms
var checkInclusion = function(s1, s2) {
	if (s1.length > s2.length) {
        return false;
    }
    
    const counter = new Array(128).fill(0);
    for (let char of s1) {
        counter[char.charCodeAt(0)]++;
    }
    
    let left = 0;
    let right = 0;
    
    while (right < s2.length) {
        const rightChar = s2.charAt(right);
        counter[rightChar.charCodeAt(0)]--;
        
        while (counter[rightChar.charCodeAt(0)] < 0 && left <= right) {
            const leftChar = s2.charAt(left);
            counter[leftChar.charCodeAt(0)]++;
            
            left++;
        } 
        
        if (right - left + 1 === s1.length) {
            return true;
        }
        
        right++;
    }
    
    return false;
};






var isEmpty = counter => {
    for (let count of counter){
        if (count !== 0) {
            return false;
        }
    }
    return true;
}

// 68 ms
var checkInclusion1 = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    
    let counter = new Array(128).fill(0);
    for (let char of s1) {
        counter[char.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < s2.length; ++i) {
        let char = s2.charAt(i);
        counter[char.charCodeAt(0)]--;
        
        if (i >= s1.length) {
            char = s2.charAt(i-s1.length);
            counter[char.charCodeAt(0)]++;
        }
        
        if (isEmpty(counter) ) {
            return true;
        }
    }
         
    return false;
};