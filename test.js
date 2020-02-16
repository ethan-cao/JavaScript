const nums = [1, 2, 3, 4, 5];

const students = [
		{ name: "Shujun", age: 19, gender: "female", nationality: "Chinese" },
		{ name: "Shujun1", age: 19, gender: "female", nationality: "Chinese" },
		{ name: "Shujun2", age: 19, gender: "female", nationality: "Chinese" },
		{ name: "Shujun3", age: 19, gender: "female", nationality: "Chinese" },
		{ name: "Shujun4", age: 19, gender: "female", nationality: "Chinese" }
];


students.reduce((a, b) => a+b);