class Employee {
    constructor (Name, Age, Salary, yearsOfWorking) {
        this.Name = Name;
        this.Age = Age;
        this.Salary = Salary;
        this.yearsOfWorking = yearsOfWorking;
    }
    
    addYearsOfExperience (years) {
        this.yearsOfExperiance = years + this.yearsOfWorking;
    }
}

class Animal {
    constructor (type, name) {
        this.type = type;
        this.name = name;
    }

    get desc() {
        return this.name + " is a " + this.type 
    }
}

class Bird extends Animal {
    constructor (name, canFly, hasFeathers, isBaby) {
        super("Bird", name);
        this.canFly = canFly;
        this.hasFeathers = hasFeathers;
        this.isBaby = isBaby;
    }

    static giveId(object, id) {
        object.id = id;
    }

    get moreDesc() {
        return  this.name + " is a " + this.type + ", that " + 
        ((this.hasFeathers) ? "has feathers":"does not have feathers") + " and it can" + 
        ((this.canFly) ? " fly":"not fly") + ". It is a" + ((this.isBaby) ? " baby": "n adult")
    }

    set Age(age) {
        if (age.toLowerCase() === "baby") {
            this.isBaby = true;
        } else if (age.toLowerCase() === "adult") {
            this.isBaby = false;
        } else {
            console.log("you provided a wrong value")
        }
    }
}

bird1 = new Bird("Ostrich", false, true, false);
person1 = new Employee("Taha", 15, 100000, 10);
person1.addYearsOfExperience(10);
bird1.Age = "baby";
Bird.giveId(bird1, "Rocky");

console.log(bird1.desc);
console.log(bird1.moreDesc);
console.log(person1);
console.log(bird1);