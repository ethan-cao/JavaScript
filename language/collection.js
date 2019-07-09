console.log("Set test\n");
let set = new Set();

set.add("one")
   .add("two")
   .add("one");

console.log(set.size);  // 2

console.log(set.has("two")); // true

for (let key of set.values()) {
    console.log(key); // insertion order. ["one", "two"]
}

console.log("WeakSet test\n");
/* WeakSet is collections of objects only
   If there is no other reference to an object stored in the WeakSet, they can be garbage collected.
*/





console.log("Map test\n");

let map = new Map();
let symbol = Symbol("Symbol");

map.set("one", 1);
map.set(symbol, 2);

console.log(map.size); // 2
console.log(map.get(symbol)); // 2

for (let [k, v] of map.entries())
    console.log(k.toString() + " : " + v);

/*
 WeakMap is a map  where the keys are object,  Symbol can't be a WeakMap key
 and weak reference to keys - if there is no other reference to the object key, 
 when the key gets garbage collected so do the values.
*/
 