let map = new Map();

map.set("one", 1);

let symbol = Symbol("test");
map.set(symbol, 2);

console.log(map.size); // 2

console.log(map.get(symbol)); // 2

for (let [k, v] of map.entries()) {
	console.log(k.toString() + " : " + v);
}


// Symbol: used as an identifier for object properties; this is the data type's only purpose
const s1 = Symbol("s1"); // returns a value of type symbol
const s2 = Symbol("s1"); 

// Every symbol value returned from Symbol() is unique
s1 === s2 // false

/*
 WeakMap is a map  where the keys must be object,  Symbol can't be a WeakMap key
 not iterable

 and weak reference to keys - if there is no other reference to the object key, 
 when the key gets garbage collected so do the values.
*/

const map = new Map([[1, 2], [2, 4], [4, 8]]);