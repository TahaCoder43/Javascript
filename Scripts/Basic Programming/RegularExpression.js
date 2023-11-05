let str = "The biggest country in the world is Russia";
let str2 = "there is is a lot of 'is' in this sentence is for no reason"

console.log(str.search("Russia"))
console.log(str.search(/russia/i))
console.log(str2.match(/is/g))
console.log(str2.search(/[abc]/))

/*
Modifier 	Description 	Try it
i 	Perform case-insensitive matching 	
g 	Perform a global match (find all matches rather than stopping after the first match) 	
m 	Perform multiline matching 	
Regular Expression Patterns

Brackets are used to find a range of characters:
Expression 	Description 	Try it
[abc] 	Find any of the characters between the brackets 	
[0-9] 	Find any of the digits between the brackets 	
(x|y) 	Find any of the alternatives separated with | 	

Metacharacters are characters with a special meaning:
Metacharacter 	Description 	Try it
\d 	Find a digit 	
\s 	Find a whitespace character 	
\b 	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b 	

\uxxxx 	Find the Unicode character specified by the hexadecimal number xxxx 	

Quantifiers define quantities:
Quantifier 	Description 	Try it
n+ 	Matches any string that contains at least one n 	
n* 	Matches any string that contains zero or more occurrences of n 	
n? 	Matches any string that contains zero or one occurrences of n 	
*/
