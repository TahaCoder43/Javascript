
let running = true;

function illegalInfiniteLoop() {
    let count = 0;
    while (running) {
        clearTimeout(100)
        console.log(count);
        count++;
    };
    console.log(count)
}

document.getElementById("endLoop").onclick = function () {
    running = false;
}

console.log(running)


setTimeout(illegalInfiniteLoop, 0)