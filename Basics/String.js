const s = "test_text";

console.log(s.length); // 8

for (let char of s) {
	console.log(char);
}

s.charAt(2); // s
s.includes("te"); //true
s.split("_"); // ["test", "text"]
s.substring(0, s.length - 2); //cut last 2 char:
s.charCodeAt(0); // asc2 code for the 1st char

s.toUpperCase();  // s remains the same, produces a upper case string

const name = "Foo";
const amount = 7;
const product = "Bar";
const unitprice = "10";

// Template literal
var message = `
        Hello ${name},
        want to buy ${amount} ${product} for a total of ${amount * unitprice} bucks.
    `;

console.log(message);

/*  
Hello Foo,
want to buy 7 Bar for a total of 294 bucks.
*/


// Raw String Access

function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}

quux `foo\n${ 42 }bar`

console.log(String.raw `foo\n${ 42 }bar` === "foo\\n42bar");  // true

