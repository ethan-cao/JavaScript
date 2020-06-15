/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Example
3 ->
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/


// 56ms
const generate = (leftCount, rightCount, combination, combinations) => {
    if (leftCount === 0 && rightCount === 0) {
        combinations.push(combination);
    }   
    
    if (leftCount > 0) {
        generate(leftCount - 1, rightCount, combination + '(', combinations) 
    }
    
    if (rightCount > 0 && leftCount < rightCount) {
        generate(leftCount, rightCount - 1, combination + ')', combinations) 
    }
    
};

var generateParenthesis = function(n) {
    const solution = [];
    
    const leftCount = n;
    const rightCount = n
    
    generate(leftCount, rightCount, "", solution); 
    
    return solution;
};