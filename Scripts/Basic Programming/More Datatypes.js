// objects most declared with as constants

const car = {
    speed: 120,
    cost: 20000,
    model: "mercedes s class 2022",
    MaxPassengerLimit: 4,
    color: "blue",
    worth: function() {
        if (this.cost/this.speed > 100) {
            return "Worth"
        }
        else {
            return "Not Worth"
        }
    }
};

console.log(car.speed);
console.log(car["model"]);
console.log(car);
console.log(car.worth())