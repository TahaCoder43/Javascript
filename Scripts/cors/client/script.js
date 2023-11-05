const button = document.getElementById("button");
const messageBox = document.getElementById("message");

async function getData() {
    const promise = await fetch("http://localhost:8000/get", { credentials: "include", method: "GET" });
    const { message } = await promise.json();
    if (messageBox) {
        messageBox.innerHTML = message;
    }
}

if (button) {
    button.addEventListener("click", getData);
}
