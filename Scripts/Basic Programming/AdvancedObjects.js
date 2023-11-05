const Person = {
    name: "Taha",
    age: 15,
    isMale: true,
    get Description() {
        return this.name + " is a " + String(this.age) + " year old " + ((this.isMale) ? "Boy":"Girl")
    },
    set lang(lang) {
        this.firstLanguage = lang
    }
};

Object.defineProperty(Person, "Birthday", {
    get : function() {this.age++}
})

Person.Birthday
console.log(Person.Description);
Person.lang = "Urdu";
console.log(Person.firstLanguage)
