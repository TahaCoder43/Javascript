
// promise will run after the console.log

function rejectFunction() {
    console.log("error");
}

let myPromise = new Promise(function(resolve, reject) {
    if (0==0) {
        resolve("Value");
    } else {
        reject("Error")
    }
});

console.log(myPromise)

// see how this is logged after the promise is completed
myPromise.then( // executed after the promise is succesfull fulfileed
    function (promiseReturnValue) {console.log(promiseReturnValue)}
).catch(
    function (error) {console.log(error)}
)


console.log("but bananas are better")

// using async and await to wait for a loop to finish and then logging the value


// let running = true;

async function awaitForThePromise() {
    let loopProimse = new Promise(function (resolve, reject) {
        let count = 1;
        while (count < 1000) {
            count++;
        };
        if (count != 0) {
            resolve(count) //returns values on then
        } else {
            reject("Error") //return values on catch
        }
    })
    console.log(await loopProimse)
}

awaitForThePromise()

console.log("this runs before")

// trying the never ending loop

// not working😢

// function neverEndingPromise() {
//     let running = true
//     document.getElementById("endPromise").addEventListener("click", function () {
//         running = false;
//     })
//     return Promise.resolve().then((value) => {
//         let count = 0
//         while (running) {
//             count++;
//         }
//         return count;
//     })
// }

// console.log(neverEndingPromise())



// Queing tasks and doing something when they are done

function waitingForTasks() {
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve("1: done")
            console.log("task one done")
        }, 1000)
    })
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("task two done")
            // notice how when logging both tasks are done asynchronosly, that's beacuse of the way promises work
            resolve("2: done")
        }, 1500)
    })

    const tasks = Promise.all([promise1, promise2])

    async function waitForPromises() {
        const result = await tasks;
        console.log(result) 
    }
    waitForPromises();
}

waitingForTasks()

// await in for loop
// there is a way for the loop to loop again once it's done donig the task using 'for await' but I can't figure that otu

function awaitInForLoop() {
    let task = new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("done loop")
            resolve("value")
        }, 1000)
    })

    async function waitingTasks() {
        for (let x = 0; x < 5; x++) {
            let value = await task
            console.log(`${x}:`, value)
        }
    }

    waitingTasks()
}

awaitInForLoop()