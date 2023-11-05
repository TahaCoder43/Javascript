const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let sum = 0;

function sumAll(value) {
    sum += value
}

set1.add(11);
set1.delete(1);
// A set will remove multiple occurences of the same value
set1.add(5);
set1.forEach(sumAll)

console.log(set1.has(5));
console.log(set1);
console.log(sum)
console.log(set1.values())
console.log(set1.size)