let alphabeticalNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let operationNames = ["divide", "division", "multiply", "product", "multiplication", "sum", "add", "addition", "subtract", "subtraction"]
let middleOperations = ["divide by", "multiply by", "plus", "minus"];
let answers = ["answer", "it"];
let operations = ["/", "*", "+", "-"];
let operationFunctions = [
    (num1, num2) => num1 / num2, (num1, num2) => num1 * num2,
    (num1, num2) => num1 + num2, (num1, num2) => num1 - num2
];

let functions = (function() {
    function ifAlphabeticalNumber(equation, operator, item, i) {
        if (operator == "") {
            equation.push(alphabeticalNumbers.indexOf(item));
        } else {
            equation.push(alphabeticalNumbers.indexOf(item));
            equation.push(operator);
            operator = ""
        }
        return operator
    }
    function ifNumber(equation, operator, item, i) {
        if (operator == "") {
            equation.push(Number(item));
        } else {
            equation.push(Number(item));
            equation.push(operator);
            operator = ""
        }
        return operator
    }
    function ifOperator(operator, item, i) {
        let itemIndex = operationNames.indexOf(item);
        operator = (itemIndex < 2 && itemIndex >= 0) ? "/":(itemIndex < 5) ? "*":(itemIndex < 8) ? "+":"-";
        return operator
    }
    function ifMiddleOperator(equation, item, i) {
        let itemIndex = middleOperations.indexOf(item);
        let tempOperator = (itemIndex < 1 && itemIndex >= 0) ? "/":(itemIndex <2) ? "*":(itemIndex < 3) ? "+":"-";
        equation.push(tempOperator)
        console.log("IfMiddleOperator: ", equation)
    }
    function ifAnswer(equation, operator) {
        let i = equation.length - 2
        if (operations.indexOf(operator) != -1) {
            console.log("Came into the first condition")
            equation.push(operator)
            return ""
        } else if (Number.isNaN(equation[i+1] / 2)) {
            console.log("Came into the second condition")
            let num = equation[i];
            let opr = equation[i+1];
            console.log("Number and operator: ", num, opr)
            console.log("equation before splice", equation)
            console.log("This is the index", i)
            console.log("This is the sliced part", equation.splice(i, 2, opr, num))
            console.log("equation after splice", equation)
        }
        
        // todo: This funciton is incomplete, it makes the equation but does not solve it it just needs the dmas function
        // todo: you will have to create a middle operator and a normal operator condition for this funciton
        // todo: The normal operator one will be normal where the middle operator will be placed one before
    }

    return {
        ifAlphabeticalNumber: ifAlphabeticalNumber, ifNumber: ifNumber, ifOperator: ifOperator,
        ifMiddleOperator: ifMiddleOperator, ifAnswer: ifAnswer
    };

})()

function performDMAS(equations) {
    let Answers = [];
    for (equation of equations) {
        for (let operation of operations) {
            let i1 = 0
            while (i1 < equation.length) {
                let answer;
                let answerIndex;
                for (; i1 < equation.length + 1; i1++) {
                    let value = equation[i1];
                    if (value == operation) {
                        let num1 = equation[i1 - 1];
                        let num2 = equation[i1 + 1];
                        operationFunction = operationFunctions[operations.indexOf(operation)]
                        ans = operationFunction(num1, num2);
                        answer = ans
                        answerIndex = i1 - 1
                        break
                    }
                }
                if (answer != undefined && answerIndex != undefined) {
                    equation.splice(answerIndex, 3, answer);
                }
            }
        }
        Answers.push(equation[0]);
    }
    if (Answers.length == 1) {
        Answers = Answers[0]
    }
    return Answers
}

function seperateEquations(equation) {
    let types = [];
    let equations = [[]];
    for (let x = 0; x < equation.length; x++) {
        if (!Number.isNaN(equation[x] / 1)) {
            types.push("Number")
        } else {
            types.push("Operator")
        }
    }
    console.log("types of objects:", types)
    for (let x = 0, wasNumber = false; x < equation.length; x++) {
        let value = equation[x], type = types[x];
        console.log("for loop value: ", value)
        console.log("for loop type: ", type)
        if (type == "Number") {
            if (wasNumber) {
                equations.push([])
            }
            equations[equations.length - 1].push(value);
            wasNumber = true
        } else {
            equations[equations.length - 1].push(value)
            wasNumber = false
        }
    }
    return equations
}

function generateEquation(stringEquation) {
    stringEquation = stringEquation.split(" ")
    let equation = [];
    let operator = "";
    for (let i = 0; i < stringEquation.length; i++) {
        let item = stringEquation[i];
        if (alphabeticalNumbers.indexOf(item) != -1) {
            operator = functions.ifAlphabeticalNumber(equation, operator, item, i);
        } else if (!Number.isNaN(item / 1)) {
            operator = functions.ifNumber(equation, operator, item, i);
        } else if (answers.indexOf(item) != -1) {
            operator = functions.ifAnswer(equation, operator);
        } else if (operationNames.indexOf(item) != -1 && stringEquation[i + 1] != "by") {
            operator = functions.ifOperator(operator, item, i);
        } else if (middleOperations.indexOf(item + " " + stringEquation[i + 1]) != -1 || middleOperations.indexOf(item) != -1) {
            functions.ifMiddleOperator(equation, item, i);
        }
    }
    return equation;
}

function Solve() {
    let stringEquation = document.getElementById("stringEquation").value;
    let equation = generateEquation(stringEquation);
    console.log("Unorganized equation: ", equation);
    let equations = seperateEquations(equation)
    console.log("Organized equations", equations)
    let answer = performDMAS(equations);
    console.log(answer)
}