
// you can use type 'any' to refer to all types
let luckiness: number = 15;

// type script can also guess the type which is called implicit types and types declared by user 
// are called explicit types
let unluckiness = 10;

// This code would cause type script to show an error try uncommenting it
// luckiness = "15"

console.log(luckiness)

// creating custom types

// '|' stands for union
type Style = "bold" | "italic" //type can only be a string with the text bold or italic
let font: Style = "bold"

// this wont' cause an error
font = 'italic'

// This would cause an error
// font = 'bold italic'

console.log(font)

// you can also add different type values to a single type

type myBool = Boolean | "true" | "false"

let running: myBool = "true";
running = true

// this would cause an error
// running = 0 (we can add '1' and '0' to it too)

// using types with objects

interface Person {
    first:string,
    last:string
}

const person:Person = {
    first:"Taha",
    last:"Munawar"
}

// interfaces are really strict and the following would cause errors

// Error 1
// const person1: Person = {
//     first: 12,
//     last: "Munawar"
// }

// Error2
// const person1: Person = {
//     first: "Taha"
// }

// Error3
// const person1: Person = {
//     first: "Taha",
//     last: "Munawar",
//     age: 15
// }

// We can solve Error 3 by doing the following

interface Animal {
    type:string,
    isMammal:boolean
    [key:string]:any
}

const animal1:Animal = {
    type:"Lion",
    isMammal:true,
    area:"African"
}

// Strongly typing functions

function pow(x:number, y:number): string {
    return Math.pow(x, y).toString()
}

console.log(pow(12, 5))

// This would show an error during compile time thus not showing it during development 
// console.log(pow("12", 5))

// function without return keyword

function sayHello(): void {
    console.log("Hello World")
}

sayHello()

// Strong typing arrays
// type interferece can also be used on arrays [1, 2, 3] would make the arrray number[]

const arr1:number[] = []

arr1.push(2)
// This would cause an error
// arr1.push(true)

// python tuple

// we can put question mark infront of each value so we dont' ahve to put in the value
type myTuple = [number, string, boolean];

const arr2:myTuple = [12, "Hello", true];

console.log(arr2)


