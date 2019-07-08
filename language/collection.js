console.log("Set tests\n");
let set = new Set();

set.add("one")
   .add("two")
   .add("one");

console.log(set.size);  // 2

console.log(set.has("two")); // true

for (let key of set.values()) {
    console.log(key); // insertion order. ["one", "two"]
}




console.log("Map tests\n");

let map = new Map();
let symbol = Symbol("Symbol");

map.set("one", 1);
map.set(symbol, 2);

console.log(map.size); // 2
console.log(map.get(symbol)); // 2

for (let [k, v] of map.entries())
    console.log(k.toString() + " : " + v);