submit = () => {
    inpb = document.forms["info"]['fname']
    console.log(inpb.value)
    inpb.value = ""
}

/* 
Attribute 	Description
disabled 	Specifies that the input element should be disabled
max 	Specifies the maximum value of an input element
min 	Specifies the minimum value of an input element
pattern 	Specifies the value pattern of an input element
required 	Specifies that the input field requires an element
type  	Specifies the type of an input element
*/

/* 
:disabled 	Selects input elements with the "disabled" attribute specified
:invalid 	Selects input elements with invalid values
:optional 	Selects input elements with no "required" attribute specified
:required 	Selects input elements with the "required" attribute specified
:valid 	Selects input elements with valid values
*/