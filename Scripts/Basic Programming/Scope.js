let a = "lmoa";
var t = "lol";


{
    let b = "yay";
    console.log(a);
}

try {
    console.log(b);
} catch(err) {
    console.log(err)
}

function Useless() {
    var AlsoTemp = "This is also temporary because this has local scopr";
    console.log(AlsoTemp);
}

try {
    console.log(AlsoTemp);
} catch(err) {
    console.log(err)
}

// In Html global variable are variables that are declared on the window that is why let variables
// are not global

try {
    console.log(window.t)
    console.log(window.a)
} catch(err) {
    console.log(err)
}