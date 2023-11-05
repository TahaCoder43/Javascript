// you can use type 'any' to refer to all types
let luckiness = 15;
// type script can also guess the type which is called implicit types and types declared by user 
// are called explicit types
let unluckiness = 10;
// This code would cause type script to show an error try uncommenting it
// luckiness = "15"
console.log(luckiness);
let font = "bold";
// this wont' cause an error
font = 'italic';
// This would cause an error
// font = 'bold italic'
console.log(font);
let running = "true";
running = true;
const person = {
    first: "Taha",
    last: "Munawar"
};
const animal1 = {
    type: "Lion",
    isMammal: true,
    area: "African"
};
// Strongly typing functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
console.log(pow(12, 5));
// This would show an error during compile time thus not showing it during development 
// console.log(pow("12", 5))
// function without return keyword
function sayHello() {
    console.log("Hello World");
}
sayHello();
// Strong typing arrays
// type interferece can also be used on arrays [1, 2, 3] would make the arrray number[]
const arr1 = [];
arr1.push(2);
const arr2 = [12, "Hello", true];
console.log(arr2);
