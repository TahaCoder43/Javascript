// first way
const cat = {
    meow: "🐱"
};
const dog = {
    woof: "🐩"
};
// you can either do 
// function makeSound(animal: Cat | Dog) {
//     const cat1 = animal as Cat
//     cat1.meow
// }
// but this is something you don't want to do in your codebase cause it can make the codebase confusing and complex
function isCat(animal) {
    return animal.meow !== undefined;
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal.meow;
    }
    else {
        animal.woof;
    }
}
const petShop = [{ meow: "yes" }, { meow: "yes" }, { woof: "yes" }, { meow: "yes" }, { woof: "yes" }];
const notHostile = petShop.filter(isCat);
console.log(notHostile);
// you can also do 
function makeAnotherSound(animal) {
    if ("meow" in animal) {
        return animal.meow;
    }
    return animal.woof;
}
