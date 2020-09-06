/*
Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same
where in each step you can delete one character in either string.

The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.

### Example
"sea", "eat" -> 2
one step to make "sea" to "ea" and another step to make "eat" to "ea"

*/

"use strict";

var minDistance = function(word1, word2) {
    const minDistances = Array(word1.length+1).fill(0).map(x=>Array(word2.length+1).fill(0));
    
    for (let i = 0; i < word1.length+1; ++i){
        minDistances[i][0] = i;
    }
    
    for (let i = 0; i < word2.length+1; ++i) {
        minDistances[0][i] = i;
    }
    
    for (let i = 1; i <= word1.length ; ++i) {
        for (let j = 1; j <= word2.length ; ++j) {
            if (word1.charAt(i-1) === word2.charAt(j-1)) {
                minDistances[i][j] = minDistances[i-1][j-1];
            } else {
                minDistances[i][j] = 1 + Math.min(minDistances[i-1][j], minDistances[i][j-1]);
            }
        }
    }
    
    return minDistances[word1.length][word2.length];
};