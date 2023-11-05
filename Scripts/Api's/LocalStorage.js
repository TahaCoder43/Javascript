/*
Storage Object Properties and Methods
Property/Method 	Description
key(n) 	Returns the name of the nth key in the storage
length 	Returns the number of data items stored in the Storage object
getItem(keyname) 	Returns the value of the specified key name
setItem(keyname, value) 	Adds that key to the storage, or update that key's value if it already exists
removeItem(keyname) 	Removes that key from the storage
clear() 	Empty all key out of the storage
Related Pages for Web Storage API
Property 	Description
window.localStorage 	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
window.sessionStorage 	Allows to save key/value pairs in a web browser. Stores the data for one session
*/

localStorage.setItem("name", "Taha Munawar");
sessionStorage.setItem("name", "Taha Munawar")

console.log(localStorage.getItem("name"))
console.log(sessionStorage.getItem("name"))