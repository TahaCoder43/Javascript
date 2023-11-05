function Person(Name, Age, City) {
    this.Name = Name;
    this.Age = Age;
    this.City = City;
}

Person.prototype.country = "Pakistan"

const person1 = new Person("Taha", 15, "Rawalpindi")
const person2 = new Person("Shan", 17, "Rawalpindi")

console.log(person1.Name)
console.log(person2.country)