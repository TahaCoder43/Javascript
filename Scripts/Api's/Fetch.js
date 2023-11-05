async function getText(justAFile) {
    let myObject = await fetch(justAFile);
    let myText = await myObject.text();
    return myText
}

console.log(getText("justSomeData.txt"))

// You can also do

fetch(justAFile)

.then(x => x.text())
.then(y => myDisplay(y));
console.log(y)