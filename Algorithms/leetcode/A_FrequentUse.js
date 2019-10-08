/** Array */
const nums = [1,2,3,4,5,100];

console.log(nums.length); // 6
nums.forEach(num=>console.log(num));
for (const num of nums) {
    console.log(num)
}

nums.push(6); //Add to the last index, nums = [1,2,3,4,5,100,6];
nums.pop();   // Removes value at the last index, nums = [1,2,3,4,5,100];

nums.unshift(0); //Add to the first index, nums = [0,1,2,3,4,5,100];
nums.shift();   //remove value at the first index, nums = [1,2,3,4,5,100];

// const deletedItemsArray = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
nums.splice(0, 0, -1, 0);  // nums = [-1,0,1,2,3,4,5,100]
nums.splice(0, 2);         // nums = [1,2,3,4,5,100]

const newNums = nums.slice(); // copy the array
newNums = nums.slice(0, 5);  // copy the array from 0 til 4

// The default sort order is built upon converting the elements into strings, 
nums.sort(); // [1, 100, 2, 3, 4, 5]
nums.sort((a,b)=>a-b);  //  [1,2,3,4,5,100];

nums.filter(x=>x>3); // [4,5]
nums.map(x=>x+1); // [2,3,4,5,6]

nums.includes(2); // true
nums.some(x=>x>=5); //true
nums.every(x=>x>=5); // false
nums.reduce((a,b)=>a+b) // 15 (accumulator, currentValue) => accumulator + currentValue

// tranform array-like or iterable into true array
const charArray = Array.from("char"); // ["c", "h", "a", "r"]
// create array from every arguments
newNums = Array.of(1, 2, 3, 4, 5, 6);  //  [1, 2, 3, 4, 5, 6]


/** String */
const s = "test_text";

console.log(s.length); // 8

for (const char of s) {
    console.log(char)
}

s.includes("te"); //true
s.split("_");  // ["test", "text"]


/** Set */