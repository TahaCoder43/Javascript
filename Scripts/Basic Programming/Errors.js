function Get() {
    let value = document.getElementById("Entry1").value;
    if (value > 500 || value < 0) {
        throw "value too big or too small(" + String(value) + ")"
    } else {
        console.log(value ** 2)
    }
}

try {
    alerr("Hey");
}
catch(err) {
    console.log("This is the error you just caught")
    console.log(err)
}
finally {
    console.log("Execution complete")
}