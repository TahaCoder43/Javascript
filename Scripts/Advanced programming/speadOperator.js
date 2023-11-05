const numbers = [1, 2, 3, 4, 5];

function output(val1, val2, val3, val4, val5) {
    console.log(val1)
    console.log(val2)
    console.log(val3)
    console.log(val4)
    console.log(val5)
}

output(...numbers);

const [one, two, ...rest] = numbers

console.log(rest)

const Human = {name:"Taha", age:15, city:"Rawalpindi"}
const update = {country:"Pakistan", degree: "o-level"}

updatedHuman = {...Human, ...update}
console.log(updatedHuman)

