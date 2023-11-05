const human1 = {
    Name: "Taha", Age: 14, isMale: true,
    Return_Description: function () {
        return this.Name + " is a " + this.Age + " year old " + ((this.isMale) ? "Boy":"Girl");
    }
};
const human2 = new Object()
const human3 = human1;
const car1 = {company: "Mercedes", Model: "S 2022", dateOfFormation: new Date()}

// You cannnot create a copy of an object it will just create an instance of it
human2.name = "Aliya";
human2.age = 11;
human2.isMale = false;
human3.Age = 15;

console.log(human1, human3);
console.log(human1.Return_Description())
console.log(JSON.stringify(human1))
console.log(JSON.stringify(car1))

for (let prop in human2) {
    console.log(prop);
}

for (let value of Object.values(human2)) {
    console.log(value)
}