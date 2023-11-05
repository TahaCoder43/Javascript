(function () {
    var value = 10;
    console.log(value);
})();
foo1 = new Function("a, b", "return a**b");

function foo2(a, b) {
    return arguments;
}

console.log(foo1(5, 2));
console.log(foo2(3, 6, 7, d="hello"));
console.log(foo2.toString());

function change(primitiveValue, object) {
    primitiveValue += 5;
    object.b += 5;
}

let n = 5;
let obj = {a:4, b:5}

change(n, obj)

console.log(n)
console.log(obj.b)