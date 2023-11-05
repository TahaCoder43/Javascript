var sentence1 = "where is (Taha) my name (Taha)";
var sentence2 =  "These are all different";

console.log(sentence1.indexOf("Taha"));
console.log(sentence1.lastIndexOf("Taha"));
console.log(sentence1.search("Taha"));
console.log(sentence1.includes("my"));
console.log(sentence1.match(/Taha/g));
console.log(sentence1.includes("my", 20)) 
console.log(sentence2.startsWith("These"))
console.log(sentence2.endsWith("same"))
// You can also specify the staring position for the startwith method and the length
// in the end with method