/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters is given below. Note that 1 does not map to any letters.
2 : a, b, c
3 : d, e, f
4 : g, h, i
5 : j, k, l
6 : m, n, o
7 : p, q, r, s
8 : t, u, v
9 : w, x, y, z

### Example
"23" -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Q22 is similar

*/

const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

// 48ms
var combine = (idx, digits, combination, combinations) => {
    if (idx >= digits.length) {
        combinations.push(combination);
        return;
    }  

    //const digit = digits.charAt(idx).charCodeAt(0) - '0'.charCodeAt(0);
    const letters = mapping[digits[idx]];
    
    for (let letter of letters) {
        combine(idx+1, digits, combination + letter, combinations);    
    }
}

var letterCombinations = function(digits) {
    let combinations = [];
    
    if (digits.length > 0) {
        combine(0, digits, "", combinations);
    }

    return combinations;
};
