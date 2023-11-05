let person1 = {name:"Taha", age:15, isMale:true};

person1[Symbol.iterator] = function() {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value:n, done:done};
        }
    }
}

let person2 = {name: "Aliya", age: 11, isMale: false};

person2[Symbol.iterator] = function() {
    let i = 0;
    let done = false;
    let value = "";
    return {
        next() {
            value = this[Object.keys(this)[i]];
            console.log(this[Object.keys(this)])
            console.log(Object.keys(this).length)
            i++;
            if (i == Object.keys(this).length) {done = true}
            console.log(value)
            return {value:value, done:done};
        }
    }
}

for (value of person1) {
    console.log(value)
}

// Can't make this work

for (value of person2) {
    console.log(value)
}