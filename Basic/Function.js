// function is scoped to block
{
	function f1() {
		return console.log(1);
	}
	f1();

	{
		function f1() {
			return console.log(2);
		}
		f1();
	}

	f1();
}
// logs 1, 2, 1

// default param value
function sum(x, y, z = 2, a) {
	console.log(`exptects ${sum.length} params`);  // 2, only parameters before 1st with default value is counted
	console.log(`receives ${arguments.length} arguments`); // 2
	return x + y + z;
}
console.log("sum : " + sum(0, 1)); // 3

// Rest Parameter, a is array
function rest(x, y, ...a) {
	return x + y + a.length;
}
console.log(rest(1, 2, "s", {}, [], 3)); // 7