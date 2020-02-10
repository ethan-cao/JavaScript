let map = new Map();

map.set("one", 1);

let symbol = Symbol("test");
map.set(symbol, 2);

console.log(map.size); // 2

console.log(map.get(symbol)); // 2

for (let [k, v] of map.entries()) {
	console.log(k.toString() + " : " + v);
}

/*
 WeakMap is a map  where the keys must be object,  Symbol can't be a WeakMap key
 not iterable

 and weak reference to keys - if there is no other reference to the object key, 
 when the key gets garbage collected so do the values.
*/
