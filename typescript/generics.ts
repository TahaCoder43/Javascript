// generics

// identify functions are functions that return whatever is given to them

// without any they are impossible to build but any is defeats the purpose of typescript

function identity(arg:any): any {
    return arg
}

// so generics are used (t stands for Type)

function betterIdentity<T>(arg:T): T{
    return arg
    // return arg.length 
    // this would make the compiler show an error
}

let output = betterIdentity("something") // types are automatically inferred

console.log(output)

// this code is also possible
// function measure<T>(arg:Array<T>): number {
function measure<T>(arg: T[]): number {
    return arg.length
}

const len = measure<string>(["something", "anotherthing"])

console.log(len)

// we could defined the identity function as a type with

let myIdentity: <T>(arg:T) => T = identity

// this can also be done
// let myIdentity: {<T>(arg:T): T} = identity

// which means we can rite a generic interface like this

// we can also move the generic type infront of the name of the interface
// because of which we will have to specify the type of generic
interface GenericIdentityFn {
    <T>(arg:T): T;
}

let interfaceIdentity: GenericIdentityFn = identity

//                   GENERIC CONSTRAITS

interface Lengthwise {
    length:number
}

// we have put a constraint that T should have a length property
function getLength<T extends Lengthwise>(arg:T): number {
    return arg.length
}

let returned = getLength(["something", "anotherthing"])

/// this code would cause a problem
// let returned = getLength(4)

console.log(returned)

function getProperty<Type, Key extends keyof Type>(obj:Type, key:Key) {
    return obj[key]
}

let dict = {a:1, b:2, c:3}

getProperty(dict, "c")

// this would cause a problem
// getProperty(dict, "f")

// if your ever interested in using classes in javascript
// you can checkout typescrips documentation on generics and move to the classes section'