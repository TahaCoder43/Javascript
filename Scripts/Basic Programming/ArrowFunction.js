let prtMessage = msg => "Users Says" + msg;

let prtHelloWorld = () => "Hello World";

let merge = (str1, str2) => str1 + str2;

let shortFunc = (initialValue) => {
    initialValue += 100
    return initialValue
}

console.log(prtMessage("hello"));
console.log(prtHelloWorld());
console.log(merge("nothing", "is"))
console.log(shortFunc(50))
