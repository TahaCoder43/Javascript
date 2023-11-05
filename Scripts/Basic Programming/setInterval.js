let interval;

function startInterval() {
    interval = setInterval(function() {console.log("looopin after every 100 miliseconds")}, 100);
};

function endInterval() {
    clearInterval(interval);
}


document.getElementById("startInterval").addEventListener("click", startInterval)
document.getElementById("endInterval").addEventListener("click", endInterval)