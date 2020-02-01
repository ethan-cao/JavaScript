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
function sum(x, y = 1, z = 2) {
	return x + y + z;
}
console.log("sum : " + sum(0)); // 3

// Rest Parameter
function rest(x, y, ...a) {
	// a is array
	return x + y + a.length;
}
console.log(rest(1, 2, "s", {}, [], 3)); // 7
