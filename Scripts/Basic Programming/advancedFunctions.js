const personMethods = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    Age: function() {
        return (new Date()).getFullYear - this.dateBirth;
    },
    addLocation: function(Country, City) {
        this.Country = Country;
        this.City = City;
    }
}

person1 = {firstName: "Taha", lastName: "Munawar", birthDate: 2006};
person2 = {firstName: "Shan", lastName: "Munawar", birthDate: 2004};

console.log(personMethods.fullName.call(person1))
personMethods.addLocation.call(person1, "Pakistan", "Rawalpindi")
personMethods.addLocation.apply(person2, ["Pakistan", "Islamabad"])
console.log(person1, person2)

const add = (function () {
    let counter = 0;
    return function (num=1) {if (num=="reset") {counter=0} else {counter += num; return counter}}
})();

let start = add(2)
add()
add(-5)
let sum = add(10)
console.log(sum)
sum = add("reset")
console.log(sum)