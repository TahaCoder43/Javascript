// Math Attributes
/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 
*/

let num1 = 12.6;
const numList1 = [2, 4, 62, 12, 42, 1, 42, -2, 100]
const numList2 = [-35, -1902, 53, -34, 24, 62]

console.log(Math.PI);
console.log(Math.round(num1))
console.log(Math.ceil(num1))
console.log(Math.floor(num1))
console.log(Math.trunc(num1))
console.log(Math.sign(num1))
console.log(Math.pow(12, 2))
console.log(Math.sqrt(64))
console.log(Math.abs(-4.7))
console.log(Math.sin(3), Math.cos(4))
console.log(Math.min.apply(null, numList1), Math.max.apply(null, numList2))
console.log(Math.random())
console.log(Math.log(4))
console.log(Math.log2(6))
console.log(Math.log10(5))
console.log(Math.round(Math.random() * 10))