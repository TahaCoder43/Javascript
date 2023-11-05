const MyElement = document.getElementById("demo");

/* 
_______________Validation Properties_______________

customError 	Set to true, if a custom validity message is set.
patternMismatch 	Set to true, if an element's value does not match its pattern attribute.
rangeOverflow 	Set to true, if an element's value is greater than its max attribute.
rangeUnderflow 	Set to true, if an element's value is less than its min attribute.
stepMismatch 	Set to true, if an element's value is invalid per its step attribute.
tooLong 	Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch 	Set to true, if an element's value is invalid per its type attribute.
valueMissing 	Set to true, if an element (with a required attribute) has no value.
valid 	Set to true, if an element's value is valid.

*/

function foo1() {
    inpObj = document.getElementById("obj1")
    // there is also a "willValidate" that tells wheter an input will validate
    if (!inpObj.checkValidity()) {
        MyElement.innerHTML = inpObj.validationMessage
    } else {
        MyElement.innerHTML = inpObj.value + "<br> Input is valid"
    }
}
