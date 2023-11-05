// there are also events that include

// onclick, onchange, onload, onunload, onmouseover, onouseout, onmousedown, onmouseup

let breakIt = false;

console.log(document.getElementById("txt1").innerHTML);

function click1() {
    document.getElementById("txt1").innerHTML += ", World!";
}

console.log(document.getElementById("txt1").style = "background-color: #555555; color: #dddddd");

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("myClass"));
console.log(document.querySelectorAll("p.myClass"));
document.getElementById("Clicker").style.color = "#ffffff";
document.getElementById("Clicker").style["background-color"] = "#000000";

function sleep(ms) {
    return new Promise(function(resolve) {return setTimeout(resolve, ms)});
}

function breakLoop1() {
    breakIt = true;
}

var click2 = (function() {
    let c = 0;
    return async function() {
        for (let i = 0; 9 > i; i++) {
            await sleep(100);
            (async function() {
                for (;1000000 > c; c++) {
                    await sleep(1000);
                    console.log(c);
                    if (breakIt) {
                        breakIt = false;
                        break;
                    };
                };
            })();
        };
    };
})();

/*
Changing HTML Elements
Property 	Description
    element.innerHTML =  new html content 	Change the inner HTML of an element
    element.attribute = new value 	Change the attribute value of an HTML element
    element.style.property = new style 	Change the style of an HTML element
    Method 	Description
    element.setAttribute(attribute, value) 	Change the attribute value of an HTML element
Adding and Deleting Elements
    document.createElement(element) 	Create an HTML element
    document.removeChild(element) 	Remove an HTML element
    document.appendChild(element) 	Add an HTML element
    document.replaceChild(new, old) 	Replace an HTML element
    document.write(text) 	Write into the HTML output stream 
Finding HTML Objects
    document.anchors 	Returns all <a> elements that have a name attribute 	1
    document.applets 	Deprecated 	1
    document.baseURI 	Returns the absolute base URI of the document 	3
    document.body 	Returns the <body> element 	1
    document.cookie 	Returns the document's cookie 	1
    document.doctype 	Returns the document's doctype 	3
    document.documentElement 	Returns the <html> element 	3
    document.documentMode 	Returns the mode used by the browser 	3
    document.documentURI 	Returns the URI of the document 	3
    document.domain 	Returns the domain name of the document server 	1
    document.domConfig 	Obsolete. 	3
    document.embeds 	Returns all <embed> elements 	3
    document.forms 	Returns all <form> elements 	1
    document.head 	Returns the <head> element 	3
    document.images 	Returns all <img> elements 	1
    document.implementation 	Returns the DOM implementation 	3
    document.inputEncoding 	Returns the document's encoding (character set) 	3
    document.lastModified 	Returns the date and time the document was updated 	3
    document.links 	Returns all <area> and <a> elements that have a href attribute 	1
    document.readyState 	Returns the (loading) status of the document 	3
    document.referrer 	Returns the URI of the referrer (the linking document) 	1
    document.scripts 	Returns all <script> elements 	3
    document.strictErrorChecking 	Returns if error checking is enforced 	3
    document.title 	Returns the <title> element 	1
    document.URL 	Returns the complete URL of the document 	1
*/