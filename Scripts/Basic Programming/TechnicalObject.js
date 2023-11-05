person1 = Object.create({})
Object.defineProperty(person1, "Name", {value: "Taha", writable: true, enumerable: true, configurable: true})
Object.defineProperties(
    person1, {
        Age: {value: 15, writable: true, enumerable: true, configurable: false},
        City: {value:"RawalPindi", writable: true, enumerable: true, configurable: false}
    }
)

Object.preventExtensions(person1)
Object.seal(person1)
Object.freeze(person1)
console.log(Object.isExtensible(person1))
console.log(Object.isSealed(person1))
console.log(Object.isFrozen(person1))
person1.yearsOfExperiance = 10
person1.City = "Islamabad"


console.log(person1)
console.log(Object.getOwnPropertyDescriptor(person1, "Name"))
console.log(Object.getOwnPropertyDescriptors(person1, ["Name", "Age", "City"]))
console.log(Object.getOwnPropertyNames(person1))
console.log(Object.getPrototypeOf(person1))