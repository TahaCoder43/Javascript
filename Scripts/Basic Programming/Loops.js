for (let x = 1, y = 4; x < y; x++) {
    console.log(x)
}

let x = 0;

while (4 > x) {
    x++
}

x = 0;

do {
    x ++;
}

while (4 > x);


str1 = "This is just a string"
array1 = ["apple", "banana", "Carror", "Dragon Fruit", "Mango"]

console.log("Looping in array")
for (let index in array1) {
    console.log(array1[index])
}

console.log("Looping of array")
for (let fruit of array1) {
    console.log(fruit)
}

console.log("Looping in str")
for (let chr in str1) {
    console.log(chr)
}

console.log("Looping of str")
for (let chr of str1) {
    console.log(chr)
}

for (let x = 0; x < 5; x++) {
    if (x == 3) {
        continue;
    }
    console.log(x)
}

outputSite: {
    console.log("Output1");
    console.log("Output2");
    break outputSite;
    console.log("Output3");
}