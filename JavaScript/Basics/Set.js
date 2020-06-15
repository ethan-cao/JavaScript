// Sets are super useful for deduping arrays
let set = new Set();

set.add("one")
   .add("two")
   .add("one");

console.log(set.size);  // 2

console.log(set.has("two")); // true

for (let key of set.values()) {
    console.log(key); // insertion order. ["one", "two"]
}

set.delete("two");

console.log("WeakSet test\n");
/* WeakSet is collections of objects only
   If there is no other reference to an object stored in the WeakSet, they can be garbage collected.
    not iterable
*/