// @ts-nocheck
function Output(value, elementId) {
    document.getElementById(elementId).innerHTML = value
}


function Calculate(num1, num2, outputMethod) {
    let sum = num1 + num2;
    outputMethod(sum, "ans");
}

setTimeout(function() {Ask("Are You still Here?")}, 10000)
setInterval(showDate, 1000)

function Ask(value) {
    document.getElementById("messageAsk").innerHTML = value
}
function showDate() {
    let tn = new Date();
    console.log(tn.getYear().toString())
    let sd = (tn.getYear() + 1900).toString() + "/" + (tn.getMonth() + 1).toString() + "/" + tn.getDate().toString()
    + "|" + tn.getHours().toString() + ":" + tn.getMinutes().toString() + ":" + tn.getSeconds().toString(); 
    document.getElementById("showTime").innerHTML = sd 
}