function outputValue(value) {
    console.log(value)
}

const fruits = new Map([
    ["Apple", 100],
    ["Banana", 60],
    ["Mango", 150],
    ["Orange", 60],
    ["Peach", 100]
]);

fruits.set("Grapes", 100);
fruits.set("Mango", 180);
fruits.delete("Peach");
fruits.forEach(outputValue)

console.log(fruits);
console.log(fruits.get("Apple"));
console.log(fruits.size);
console.log(fruits.has("Orange"));

for (entry of fruits.entries()) {
    console.log(entry)
}