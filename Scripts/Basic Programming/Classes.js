class Human {
    constructor(name, birthDate, parent) {
        this.name = name;
        this.birthDate = birthDate;
        this.parent = parent;
    }

    age() {
        let year = new Date().getFullYear();
        console.log(year);
        return year - this.birthDate;
    }
}

let man1 = new Human("Taha", 2006, "Human");

console.log(man1.age())