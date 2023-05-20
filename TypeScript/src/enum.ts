enum People {
  P1 = "jack",
  P2 = "tom"
}

console.log(People.P1);   // "jack"
console.log(typeof People.P1);  // "string"
console.log(People.P1 === "jack");  // true


// !!numeric!! enums members also get a reverse, mapping from enum values to enum names
enum Enum {
  A,
}

let enumA = Enum.A;
console.log(Enum[enumA]); // "A" string