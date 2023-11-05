function sum(number1, number2, operator) {
    let sum;
    if (operator=="/") {
        sum = number1 + number2;
    }
    else if (operator=="*") {
        sum = number1 + number2;
    }
    else if (operator=="+") {
        sum = number1 + number2;
    }
    else if (operator=="-") {
        sum = number1 + number2;
    }
    return sum;
}

function getValuesAndSum() {
    let ans;
    let num1 = parseInt(document.getElementById("Num1").value);
    let num2 = parseInt(document.getElementById("Num2").value);
    let opr = document.getElementById("Operator1").value;
    console.log(num1);
    ans = sum(num1, num2, opr);
    console.log(ans);
    document.getElementById("answer").innerHTML = ans; 
}

const names = ["Taha", "Aliya", "Shan"];
const abbreviations = {"h":"hour", min: "minute", sec:"second", d:"day", km:"kilometer"};

console.log(typeof names);
console.log(names);
console.log(names[2]);
console.log(abbreviations['min']);
console.log(abbreviations);