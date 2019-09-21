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