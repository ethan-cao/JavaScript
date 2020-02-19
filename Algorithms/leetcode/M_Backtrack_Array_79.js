/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

### Example
board = [   ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']    ]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

*/

const searchWord = (board, i, j, word, matchCount, used) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return false;
    }
    
    if (used[i][j]|| board[i][j] !== word.charAt(matchCount)) {
        return false;
    }
    
    used[i][j] = true;
    matchCount++;
    
    if (matchCount === word.length) {
        return true;
    }
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let direction of directions) {
        if (searchWord(board, i + direction[0], j + direction[1], word, matchCount, used)) {
            return true;
        } 
    }
    
    used[i][j] = false;
    
    return false;
};

var exist = function(board, word) {
    const used = new Array(board.length).fill(false).map(i => new Array(board[0].length).fill(false));
    
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (searchWord(board, i, j, word, 0, used)) {
               return true; 
            }    
        }
    }
     
    return false;
};