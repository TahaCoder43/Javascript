class Human {
    constructor(name, age, city) {
        [this.name, this.age, this.city, ...this.extras] = arguments;
    }
}

let foo1 = () => {
    console.log("Hey, Please remember to give us a review, it would help us a lot😀😀")
}

export {Human}
export default foo1
