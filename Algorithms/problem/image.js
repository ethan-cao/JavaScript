/*
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.
The image you get is known to have potentially many distinct rectangles of 0s on a background of 1's. 
Write a function that takes in the image and returns the coordinates of all the 0 rectangles 
  -- top-left and bottom-right; or top-left, width and height.

image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]

Sample output variations (only one is necessary):

findRectangles(image1) =>
  [ [[0,0],[0,0]],
    [[2,0],[2,0]],
    [[2,3],[3,5]],
    [[3,1],[5,1]],
    [[5,3],[6,4]],
    [[7,6],[7,6]],  ]

image2 = [ [0], ]
findRectangles(image2) =>  [ [[0,0],[0,0]], ]

image3 = [ [1], ]
findRectangles(image3) => []

image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]
findRectangles(image4) =>   [    [[1,1],[3,3]],  ]

*/

var image2 = [[0]];
var image3 = [[1]];
var image5 = [
	[1, 1, 1, 1], 
	[1, 0, 0, 1], 
	[1, 0, 0, 1],
	[1, 1, 1, 1]
];
var image4 = [
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1]
];
var image1 = [
	[0, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1],
	[0, 1, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 1],
	[1, 0, 1, 0, 0, 1, 1],
	[1, 1, 1, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0],
]

"use strict";

// Not working

const findImage1 = (
	image,
	previousX,
	previousY,
	x,
	y,
	rectangle,
	rectangles,
	visited
) => {
	if (x >= image.length || y >= image[0].length || visited[x][y]) {
		if (rectangle.length !== 0) {
			rectangle.push([previousX, previousY]);
			rectangles.push([...rectangle]);
			rectangle.splice(0, rectangle.length);
		}

		return;
	}

	visited[x][y] = true;

	const cell = image[x][y];

	if (cell === 0) {
		if (rectangle.length === 0) {
			rectangle.push([x, y]);
		}
	} else {
		if (rectangle.length !== 0) {
			rectangle.push([previousX, previousY]);
			rectangles.push([...rectangle]);
			rectangle.splice(0, rectangle.length);
		}
	}

	findImage(image, x, y, x + 1, y, rectangle, rectangles, visited);
	findImage(image, x, y, x, y + 1, rectangle, rectangles, visited);
};

function findRectangles(image) {
	const rectangles = [];
	const visited = Array(image.length).fill(false).map((x) => Array(image[0].length).fill(false));

	let previousX = null;
	let previousY = null;

	for (let x = 0; x < image.length; ++x) {
		for (let y = 0; y < image[0].length; ++y) {

			if (visited[x][y] || image[x][y] === 1) {
				continue;
			}

			visited[x][y] = true;

			previousX = x;
			previousY = y;

			let rectangle = [];
			rectangle.push([x, y]);

			while (x + 1 < image.length && image[x+1][y] === 0 && !visited[x + 1][y]) {
				x++;
				visited[x][y] = true;
			}

			while (y + 1 < image[0].length && image[x][y+1] ===0 && !visited[x][y + 1]) {
				y++;
				visited[x][y] = true;
			}
			
			rectangle.push([x, y]);

			rectangles.push(rectangle);

			// x = previousX;
			// y = previousY;
		}
	}

	return rectangles;
}

console.log(findRectangles(image4));
