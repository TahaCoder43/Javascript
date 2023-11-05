// javascript number are floating 64 bits
// The numnber is stored in 0-51 and the exponent in 52 to 62 and the sign in 63

// Numbers are acurate up to 15 digits

let num1 = 149;
let strNum = "50"
let decimal1 = 34.2153;
let hex = 0x3e;
let complex = 12e24;
let test1 = 999999999999999;
let test2 = 9999999999999999;
let NotANumber = 100 / "Apple";
let OverFlowed = 2;
let BeforeOverFlowed;
let division = 5 / 0;
let objnum = new Number(num1);
let exponent = num1.toExponential(2);
// toFixed(2) is used for money
// There is also toPrecision that starts from the beginning
let rounded = decimal1.toFixed(2);

while (OverFlowed != Infinity) {
	BeforeOverFlowed = OverFlowed;
	OverFlowed *= OverFlowed;
}

console.log(Number(strNum))
console.log(parseInt(strNum))
console.log(parseFloat(strNum))
console.log(num1, decimal1, complex, test1, test2);
console.log(NotANumber);
console.log(OverFlowed);
console.log("This the last number before it gets to Infinity " + BeforeOverFlowed);
console.log("Generated using devide by zero " + division);
console.log(num1.toString(32));
console.log(num1.toString(2));
console.log(objnum);
console.log(exponent);
console.log(rounded);
console.log("Rounded Numbers are " + typeof rounded)
console.log(num1.valueOf())
console.log("This is the time difference in miliseconds " + Number(new Date("1980-01-01")))
console.log("This can't be used on variables")
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN)