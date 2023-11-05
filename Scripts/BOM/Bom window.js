let d1 = new Date(2022, 2, 4)

document.cookie = "username=Taha Munawar; exprires=" + d1.toUTCString() + " ;path=/;"
let ck = document.cookie;

console.log("window properties")
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("Screen properties")
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
console.log("location properties")
console.log(location.href);
console.log(location.hostname);
console.log(location.pathName);
console.log(location.protocol);
console.log("navigator properties")
// Most of these properties provide false inforation, because browsers try to pass the site test, and most browsers cannot
// report the operating system that was released after them
console.log(navigator.appName)
console.log(navigator.appCodeName);
console.log(navigator.platform)
console.log(navigator.cookieEnabled)
console.log(navigator.product);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.online);
console.log(navigator.javaEnabled());
console.log("Cookies")
console.log(decodeURIComponent(ck))

let sI = setInterval(function() {console.log("I run after every second till ten seconds, So just ignore Me")}, 1 * 1000)
setTimeout(function() {console.log("This function ran after 5 seconds after this page loaded the script")}, 5 * 1000);
let tO = setTimeout(function() {console.log("I am supposed to run after 5 seconds the program but my execution was stopped")}, 5 * 1000);
clearTimeout(tO);
setTimeout(function() {console.log("Succesfully stoped execution of interval..."); clearInterval(sI)}, 10 * 1001)
