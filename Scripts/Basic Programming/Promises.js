function Display(message) {
    console.log(message)
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("Ok");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {Display(value);},
    function(error) {Display(error);}
)

async function Foo1() {
    return "Hello"
}

Foo1().then(
    function(value) {Display(value);},
    function(error) {Display(error);}
)

async function Foo2() {
    let tempPromise = new Promise(function(myResolve) {
        return "lmoa"
    });
    console.log(await tempPromise);
}

Foo2();