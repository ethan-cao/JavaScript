testMap();

function testArray() {
	const nums = [1, 2, 3, 4, 5, 100];

	console.log(nums.length); // 6
	nums.forEach((num) => console.log(num));
	for (const num of nums) {
		console.log(num);
	}

	nums.push(6); //Add to the last index, nums = [1,2,3,4,5,100,6];
	nums.pop(); // Removes value at the last index, nums = [1,2,3,4,5,100];

	nums.unshift(0); //Add to the first index, nums = [0,1,2,3,4,5,100];
	nums.shift(); //remove value at the first index, nums = [1,2,3,4,5,100];
	// The default sort order is built upon converting the elements into strings,
	nums.sort(); // [1, 100, 2, 3, 4, 5]
	nums.sort((a, b) => a - b); //  [1,2,3,4,5,100];

	nums.filter((x) => x > 3); // [4,5]
	nums.map((x) => x + 1); // [2,3,4,5,6]

	nums.includes(2); // true
	nums.some((x) => x >= 5); //true
	nums.every((x) => x >= 5); // false
	nums.reduce((a, b) => a + b); // 15 (accumulator, currentValue) => accumulator + currentValue

	// batch add/remove elements
	// array.splice(start[, deleteCount[, itemToAdd1[, itemToAdd2[, ...]]]])
	var newArray = nums.splice(0, 0, -1, 0); // nums = [-1,0,1,2,3,4,5,100]
	var newArray = nums.splice(0, 2); // nums = [1,2,3,4,5,100]

	var newArray = nums.slice(); // copy the array
	var newArray = nums.slice(0, 5); // copy the array from 0 til 4

	// tranform array-like or iterable into true array
	var newArray = Array.from("char"); // ["c", "h", "a", "r"]
	// create array from every arguments
	var newArray = Array.of(1, 2, 3, 4, 5, 6); //  [1, 2, 3, 4, 5, 6]
	//concatenate array
	var newArray = arr1.concat(arr2).concat(arr3);
}

function testString() {
	const s = "test_text";

	console.log(s.length); // 8

	for (const char of s) {
		console.log(char);
	}

	s.includes("te"); //true

	s.split("_"); // ["test", "text"]

	//cut last 2 char:
	id.substring(0, id.length - 2);
}

function testSet() {
	let set = new Set();

	set.add(1)
		.add(2)
		.add(3)
		.add(1);

	console.log("size: ", set.size); // 3

	for (let item of set.values()) {
		console.log(item); // insertion order: 1,2,3
	}

	set.delete(2);
	console.log(set.has(2)); // false;
}

function testMap() {
	let map = new Map();
	let symbol = Symbol("Symbol");

	map.set("one", 1);
	map.set("one", 11);
	map.set("two", 2);

	console.log("size: ", map.size); // 2
	console.log(map.get("one")); // 11

	for (let [k, v] of map.entries()) {
		console.log(k.toString() + " : " + v);   // one:11, two:2
	}
}

function testJQuery() {
	const $tableBody = $("tbody"); // select all tbody elements
	const bgColor = $tableBody.css("background-color"); // get CSS property valye

	const $rows = $tableBody.children(); // .children( [selector ] ) : get direct children that matches selector
	const $cell = $tableBody.find(".newClass"); // get all descents matching selector

	$rows.each((idx, rowElem) => {
		// idx starts from 0, rowElem is the DOM element in selection
		console.log(idx, " : ", rowElem);
		console.log(this); // this refers window,the same lexical this in its surrounding code
	});

	$rows.each(function(idx, rowElem) {
		// idx starts from 0, rowElem is the DOM element in selection
		console.log(idx, " : ", rowElem);
		console.log(this === rowElem); //true, this refers to rowElem
	});
}

/**
 * Doc example
 *
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @return {Book} an book instance, if invoked with new
 */
function Book(title, author) {}
