var sum = 0;
const numbers = [3, 6, 7, 9, 12, 15, 18];

// There is aso reduce right if you want to start reducing from the right side
numbers.forEach(MyFunc);
// runs a function on each item modifying it and hten putting it on the new array
const Products = numbers.map(Multiplier);
// runs a function on each item of the array, if the function returns true, it will put the item in the new array
// if the function returns a false it won't put the item in the new array
const Odds = numbers.filter(Odd)
let TotalSum = numbers.reduce(Sum) 
let AllOdds = numbers.every(Odd)
let someOdds = numbers.some(Odd)

function MyFunc(value, index, array) {
	sum += value;
}

function Multiplier(value, index, array) {
	return value * index;
}

function Odd(value) {
	return (value % 2 != 0);
}

function Sum(total, value, index, array) {
	return total + value;	
}

function Over12(value) {
	return value > 12;
}

function outputValues(value) {
	window.alert(value)
}

console.log(sum);
console.log(Products);
console.log(Odds);
console.log(TotalSum);
console.log(AllOdds);
console.log(someOdds);
// You can also specify the starting value and lastindexof gives the last occurence
console.log(numbers.indexOf(9))
// There is also find index whihc will return the index
console.log(numbers.find(Over12))
console.log(Array.from('abhsoih'))
for (let x of numbers.keys()) {
	console.log(x)
}
console.log(numbers.includes(15))