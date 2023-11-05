
// first way

interface Cat {
    meow:string
}

interface Dog {
    woof:string
}

const cat: Cat = {
    meow:"🐱"
}

const dog: Dog = {
    woof:"🐩"
}

// you can either do 
// function makeSound(animal: Cat | Dog) {
//     const cat1 = animal as Cat
//     cat1.meow
// }
// but this is something you don't want to do in your codebase cause it can make the codebase confusing and complex


function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined
}

function makeSound(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow
    } else {
        animal.woof
    }
}

const petShop: (Cat | Dog)[] = [{meow:"yes"}, {meow:"yes"}, {woof:"yes"}, {meow:"yes"}, {woof:"yes"}]

const notHostile: Cat[] = petShop.filter(isCat)

console.log(notHostile)

// you can also do 

function makeAnotherSound(animal: Cat | Dog) {
    if ("meow" in animal) {
        return animal.meow
    }
    return animal.woof
}