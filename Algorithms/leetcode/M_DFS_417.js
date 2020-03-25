/*
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

The order of returned grid coordinates does not matter.
Both m and n are less than 150.

### Example
Given the following 5x5 matrix:
  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic
Return: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix)..
*/

const directions = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1]
];

const flow = (matrix, x, y, height, canFlow) => {
	if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || canFlow[x][y] || height > matrix[x][y]) {
		return;
	}

	canFlow[x][y] = true;

	for (let direction of directions) {
		flow(matrix, x + direction[0], y + direction[1], matrix[x][y], canFlow);
	}
};

// DFS, 84ms
var pacificAtlantic = function(matrix) {
	const result = [];

	if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
		return result;
	}

	const M = matrix.length;
	const N = matrix[0].length;

	const canFlowToPacific = Array(M).fill(false).map(x => Array(N).fill(false));
	const canFlowToAtlantic = Array(M).fill(false).map(x => Array(N).fill(false));

	for (let i = 0; i < M; ++i) {
		flow(matrix, i, 0, Number.MIN_SAFE_INTEGER, canFlowToPacific);
		flow(matrix, i, N - 1, Number.MIN_SAFE_INTEGER, canFlowToAtlantic);
	}

	for (let i = 0; i < N ; ++i) {
		flow(matrix, 0, i, Number.MIN_SAFE_INTEGER, canFlowToPacific);
		flow(matrix, M - 1, i, Number.MIN_SAFE_INTEGER, canFlowToAtlantic);
	}

	for (let i = 0; i < M; ++i) {
		for (let j = 0; j < N; ++j) {
			if (canFlowToPacific[i][j] && canFlowToAtlantic[i][j]) {
				result.push([i, j]);
			}
		}
	}

	return result;
};

const result = pacificAtlantic([[3,3,3],[3,1,3],[0,2,4]]);
console.log(result);