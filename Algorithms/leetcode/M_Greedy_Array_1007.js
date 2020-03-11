/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations, so all the values in A are the same, 
or all the values in B are the same
If it cannot be done, return -1.

1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000

### Example
A = [2,1,2,4,2,2], B = [5,2,6,2,3,2] ->  2
The first figure represents the dominoes as given by A and B: before we do any rotations.
If rotate the second and fourth dominoes, we can make every value in the top row equal to 2,
as indicated by the second figure.

A = [3,5,1,2,3], B = [3,6,3,3,4] -> -1
impossible to rotate the dominoes to make one row of values equal.

*/

"use strict";

var minDominoRotations = function(A, B) {
	const SIZE = A.length;

	const counterA = Array(6).fill(0);
	const counterB = Array(6).fill(0);
	const counterCommon = Array(6).fill(0);

	for (let i = 0; i < SIZE; ++i) {
		counterA[A[i] - 1]++;
		counterB[B[i] - 1]++;

		if (A[i] === B[i]) {
			counterCommon[A[i] - 1]++;
		}
	}

	for (let i = 0; i < 6; ++i) {
		if (counterA[i] + counterB[i] - counterCommon[i] * 2 >= SIZE - counterCommon[i]) {
			return SIZE - Math.max(counterA[i], counterB[i]);
		}
	}

	return -1;
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2])); // 2
console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4])); // 0
