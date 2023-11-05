let sleep = new Promise(function(resolve, ms) {return setTimeout(promise, ms * 1000)})

(async function() {
    for (let i = 0; Infinity > i; i++) {
        console.log("This may only repeat nine times")
        sleep(1)
    }
})()
