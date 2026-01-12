/**
 * Demo file to showcase utility functions
 * Run this to see the functions in action
 */

import {
  capitalize,
  truncate,
  isPalindrome,
  removeDuplicates,
  sum,
  findMax, 
  average,
  deepClone,
  mergeObjects,
  debounce
} from './src/utils.js';

console.log('=== String Utilities Demo ===\n');

console.log('capitalize("hello"):', capitalize("hello"));
console.log('capitalize(""):', capitalize(""));
console.log('capitalize("world"):', capitalize("world"));

console.log('\ntruncate("hello world", 8):', truncate("hello world", 8));
console.log('truncate("short", 10):', truncate("short", 10));

console.log('\nisPalindrome("racecar"):', isPalindrome("racecar"));
console.log('isPalindrome("Racecar"):', isPalindrome("Racecar"));
console.log('isPalindrome("hello"):', isPalindrome("hello"));

console.log('\n=== Array Utilities Demo ===\n');

console.log('removeDuplicates([1, 2, 2, 3, 3, 3]):', removeDuplicates([1, 2, 2, 3, 3, 3]));

console.log('\nsum([1, 2, 3, 4, 5]):', sum([1, 2, 3, 4, 5]));
console.log('sum([]):', sum([]));
console.log('sum([10, -5, 3]):', sum([10, -5, 3]));

console.log('\nfindMax([1, 5, 3, 9, 2]):', findMax([1, 5, 3, 9, 2]));
console.log('\findMax([-5, -2, -10]):', findMax([-5, -2, -10]));
console.log('findMax([]):', findMax([]));

console.log('\naverage([10, 20, 30, 40]):', average([10, 20, 30, 40]));
try {
  console.log('average([]):', average([]));
} catch (error) {
  console.log('average([]) Error:', error.message);
}

console.log('\n=== Object Utilities Demo ===\n');

const obj1 = { a: 1, b: { c: 2 }, d: new Date() };
console.log('Original(obj1):', obj1);
console.log('deepClone:', deepClone(obj1));
 
const obj2 = { b: { y: 2 }, c: 3 };
console.log('Original(obj2):', obj2);
console.log('\nmergeObjects(obj1 and obj2):', mergeObjects(obj1, obj2));

console.log('\n=== Debounce Demo ===\n');

let counter = 0;
const increment = () => {
  counter++;
  console.log('Counter:', counter);
};

const debouncedIncrement = debounce(increment, 100);

debouncedIncrement();
debouncedIncrement();
debouncedIncrement();

setTimeout(() => {
  console.log('Final counter value:', counter);
}, 200);
