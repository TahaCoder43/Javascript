// Arrays are declared using the constant keywords because arrays are not reassigned, mostly elements are pushed into them
const fruits = ["Applen", "Banana", "Orange"];
const anotherway = new Array('Apple', "Banana", "Orange", "Mango");
const elements = new Array(40);
const students = ["Mick", "Mike", "John", "Tom", "Johnson"]
var html = "<ul>";

delete anotherway[2];
fruits[3] = "Mango";
fruits.push('Kivi');
let leavers = students.splice(1, 2, "billy", "Taha", "bobby");
// There is also pop which removes the last element
let popped_off = fruits.shift();
let newLength = fruits.unshift('Apple');
let ManyFruits = fruits.concat(anotherway);
let parts = fruits.slice(0, 2);

console.log(fruits);
console.log(anotherway);
console.log(typeof fruits);
console.log(fruits.length);
fruits.sort();
console.log(fruits);
console.log("These are 40 undefined items");
console.log(elements);
console.log(Array.isArray(fruits));
// or you use
console.log(fruits instanceof Array);
console.log(fruits.toString());
console.log(fruits.join(" and "));
console.log(popped_off);
console.log(newLength);
console.log(ManyFruits);
console.log(students);
console.log(leavers);
console.log(parts);

function listFruits() {
	fruits.forEach(loopingFunc);
	html += "</ul>";
	document.getElementById("demo").innerHTML = html;
}

function loopingFunc(value) {
	html += "<li>" + value + "</li>";
}