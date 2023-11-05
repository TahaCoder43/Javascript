// You can also use capture and bubbling which tells which nested elemetns event to fire first if it is true it starts with the top and false will start 
// from the bottom

function sayHello() {
    window.alert("Hello")
}

function sayFull() {
    window.alert("Hello, World")
}

const para2 = document.createElement("p");
const txt2 = document.createTextNode("This is the replacer");
para2.appendChild(txt2)

document.getElementById("clicker1").addEventListener("click", sayHello)
document.getElementById("clicker1").addEventListener("click", sayFull)
document.getElementById("clicker1").removeEventListener("click", sayHello)
document.getElementById("copy").innerHTML = document.body.innerHTML
const toBeReplaced = document.getElementById("useless2")
document.body.replaceChild(para2, toBeReplaced)
// You can also use removeChild(), This one is also available in older browsers
const toBeRemoved = document.getElementById("useless"); toBeRemoved.remove();

console.log(document.getElementById("r1").firstChild.nodeValue)
console.log(document.getElementById("r1").childNodes[0].nodeName)

const para = document.createElement('p')
const txt = document.createTextNode('This was entirely created by the script')

// You can also use insert before to insert at the start
para.appendChild(txt)
document.body.appendChild(para)


// All node types
/* 
ELEMENT_NODE 	1 	<h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE 	2 	 class = "heading" (deprecated)
TEXT_NODE 	3 	W3Schools
COMMENT_NODE 	8 	<!-- This is a comment -->
DOCUMENT_NODE 	9 	The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE 	10 	<!Doctype html>
*/