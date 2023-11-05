// generics
// identify functions are functions that return whatever is given to them
// without any they are impossible to build but any is defeats the purpose of typescript
function identity(arg) {
    return arg;
}
// so generics are used (t stands for Type)
function betterIdentity(arg) {
    return arg;
    // return arg.length 
    // this would make the compiler show an error
}
let output = betterIdentity("something"); // types are automatically inferred
console.log(output);
// this code is also possible
// function measure<T>(arg:Array<T>): number {
function measure(arg) {
    return arg.length;
}
const len = measure(["something", "anotherthing"]);
console.log(len);
// we could defined the identity function as a type with
let myIdentity = identity;
let interfaceIdentity = identity;
