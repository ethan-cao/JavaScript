/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:
'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

### Example
"12" -> 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

"226" -> 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

*/
"use strict";

const checkDecoding = (s, idx, cache) => {
    if (cache[idx] !== undefined) {
        return cache[idx];
    }
    
    if (idx === s.length) {
        return 1;
    }
    
    if (s.charAt(idx) === '0') {
        return 0;
    }
    
    let result = checkDecoding(s, idx + 1, cache);
    
    if (idx < s.length - 1) {
        let value = parseInt(s.substring(idx, idx + 2));
        if (value <= 26) {
            result += checkDecoding(s, idx + 2, cache);
        }
    }
    
    cache[idx] = result;
    
    return result;
};

var numdecodings = function(s) {
    return checkDecoding(s, 0, new Array(s.length + 1));
};


var numDecodings1 = function(s) {
    const numDecodings = new Array(s.length + 1).fill(0);
    numDecodings[s.length] = 1;
    
    for (let i = s.length - 1; i >= 0; --i) {
        if (s.charAt(i) === "0") {
            numDecodings[i] = 0;
        } else {
            numDecodings[i] = numDecodings[i + 1];
            
            if (i < s.length - 1) {
                let value = parseInt(s.substring(i, i + 2));
                if (value <= 26) {
                    numDecodings[i] += numDecodings[i + 2];
                }
            }
        }
    }
    
    return numDecodings[0];
};
