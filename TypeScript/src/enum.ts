enum PEOPLE1 {
  P1 = "jack",
  P2 = "tom"
}

console.log(PEOPLE1.P1);   // "jack"
console.log(typeof PEOPLE1.P1);  // "string"
console.log(PEOPLE1.P1 === "jack");  // true


// !!numeric!! enums members also get a reverse, mapping from enum values to enum names
enum Enum {
  A,
}

let enumA = Enum.A;
console.log(Enum[enumA]); // "A" string

//-----------------------------------------------------
// Better alternative
// https://youtu.be/jjMbPt_H3RQ?t=313

const PEOPLE = {
  P1: 'jack',
  P2: 'tom'
} as const

console.log(PEOPLE.P1);   // "jack"
console.log(PEOPLE.P1 === "jack");  // true