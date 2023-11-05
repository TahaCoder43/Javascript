let name = "Taha";
let sentence1 = "They say \"They say never give up\"";
let sentence2 = "windows uses \\ for transferring through files where as unix use /";
let sentence3 = "Long sentences can be annoying as you cannot just take them down to the next \
line but with the backslash it is possible";
let sentence4 = "But this isnt the safe way to do it since most browsers do not support it so it " +
"is better to just concatenate two strings";
let halfSentece1 = "This is", halfSentece2 = "good";
let toBePadded = "This is gonna be padded";

Padded = toBePadded.padStart(4, 4);
// there is also pad end i dont know how they work just figure it out
logging_pad = "a" + Padded + "a"
trimed = Padded.trim();

/* 
These are the rest of the special characters you can also use

\b 	Backspace
\f 	Form Feed
\n 	New Line
\r 	Carriage Return
\t 	Horizontal Tabulator
\v 	Vertical Tabulator

*/

// This returns the char at the specified index
console.log(sentence3.charAt(5))
// This returns its code
console.log(sentence3.charCodeAt(4))
// Or you can just do let char = sentence[3]
// But the above way is recommended because this is unpricdtable
// This is also read-only 
// you can also split the string using string.split()
console.log(name.length);
console.log(Padded)
console.log(trimed)
let objectname = new String(name);
console.log(objectname);
// new keyword isnt a good practice
console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
console.log(sentence4);
console.log(sentence2.slice(2, 5));
// The difference is slice uses indexes where as substr uses length
console.log(sentence2.substr(12, 5));
sentence4 = sentence4.replace("strings", "numbers");
// This is case sensitive you could use /STRINGS/i if you dont want that i mean insensitive
// This is a regular expression and it is written without quotes
// This only replaces one match, if you want to replace them all you could use /strings/g
console.log(sentence4);
console.log(name.toUpperCase());
// You can also use toLowerCase
fullsentence = halfSentece1.concat(" ", halfSentece2);
console.log(fullsentence);