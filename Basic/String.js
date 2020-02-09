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


var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };

// Template literal
var message = `
        Hello ${customer.name},
        want to buy ${card.amount} ${card.product} for
        a total of ${card.amount * card.unitprice} bucks?
    `;

console.log(message);

/* outputs 
Hello Foo,
want to buy 7 Bar for
a total of 294 bucks?
*/



function quux (strings, ...values) {
    strings[0] === "foo\n";
    strings[1] === "bar";
    strings.raw[0] === "foo\\n";
    strings.raw[1] === "bar";
    values[0] === 42;
}
quux`foo\n${ 42 }bar`