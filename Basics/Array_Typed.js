/*

Typed arrays, 
  * array-like objects
  * offers an easy way to read/write raw binary data in memory buffers

*/


const int8 = new Int8Array(8);

// Each entry in a array is a raw binary value 
int8[0] = 32;

// expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]
console.log(int8); 

Array.isArray(int8)  // false