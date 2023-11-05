// These workers are not working because they ain't loading

let w;

function turnItof() {
    w.terminate();
    w = undefined;
}

if (typeof(Worker) != undefined) {
    w = new Worker("WebWorkerFile.js");
    w.onmessage = function(event) {
        document.getElementById("used").innerHTML = event.data;
    }
}

setTimeout(turnItof, 10 * 1000);