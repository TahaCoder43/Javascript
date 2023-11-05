let a, b, c;
const thisIsConstant = 5;
/* You can also use var and const the difference is the let and const declates block variables
 constants must be assigned when they are declared
 constant does not define a constant value it defines a constant refrence to the value
 it is like asigning a value to the refrence
 But you can add values to arrays and objects but you cant reassign them
*/
a = 4; 
b = 8; 
c = a + b;

a++;
++a;

// When adding a number to a string js will treat it as a string
// --a;
// a--;
// putting the ++ sigm before the value of a is called so the you will get an incremented a

let x = c + a;

var y = x + 4;

let car="honda",
bike="suzuki";

{
    console.log(x)
}

notdeclared = 3;
var notdeclared;
// This does not work with let

/* You can also use $ sign as a starting letter for var but it is used for main function mostly
vatiables can also start with _ it is also valid
*/

// You can also redeclare variahbles but they will retain there values

// you could also do
// a = 4; b = 8; c = a + b;

console.log(a);
console.log(c);
console.log(x);
console.log(y, c);
console.log(notdeclared);
console.log(thisIsConstant);

/* 
Value 	Operator 	Description 	Example
21 	( ) 	Expression grouping 	(3 + 4)
  	  	  	 
20 	. 	Member 	person.name
20 	[] 	Member 	person["name"]
20 	() 	Function call 	myFunction()
20 	new 	Create 	new Date()
  	  	  	 
18 	++ 	Postfix Increment 	i++
18 	-- 	Postfix Decrement 	i--
  	  	  	 
17 	++ 	Prefix Increment 	++i
17 	-- 	Prefix Decrement 	--i
17 	! 	Logical not 	!(x==y)
17 	typeof 	Type 	typeof x
  	  	  	 
16 	** 	Exponentiation (ES2016) 	10 ** 2
  	  	  	 
15 	* 	Multiplication 	10 * 5
15 	/ 	Division 	10 / 5
15 	% 	Division Remainder 	10 % 5
  	  	  	 
14 	+ 	Addition 	10 + 5
14 	- 	Subtraction 	10 - 5
  	  	  	 
13 	<< 	Shift left 	x << 2
13 	>> 	Shift right 	x >> 2
13 	>>> 	Shift right (unsigned) 	x >>> 2
  	  	  	 
12 	< 	Less than 	x < y 
12 	<= 	Less than or equal 	x <= y
12 	> 	Greater than 	x > y
12 	>= 	Greater than or equal 	x >= y
12 	in 	Property in Object 	"PI" in Math
12 	instanceof 	Instance of Object 	instanceof Array
  	  	  	 
11 	== 	Equal 	x == y
11 	=== 	Strict equal 	x === y
11 	!= 	Unequal 	x != y
11 	!== 	Strict unequal 	x !== y
  	  	  	 
10 	& 	Bitwise AND 	x & y
9 	^ 	Bitwise XOR 	x ^ y
8 	| 	Bitwise OR 	x | y
7 	&& 	Logical AND 	x && y
6 	|| 	Logical OR 	x || y
5 	?? 	Nullish Coalescing 	x ?? y
4 	? : 	Condition 	? "Yes" : "No"
  	  	  	 
3 	+= 	Assignment 	x += y
3 	/= 	Assignment 	x /= y
3 	-= 	Assignment 	x -= y
3 	*= 	Assignment 	x *= y
3 	%= 	Assignment 	x %= y
3 	<<= 	Assignment 	x <<= y
3 	>>= 	Assignment 	x >>= y
3 	>>>= 	Assignment 	x >>>= y
3 	&= 	Assignment 	x &= y
3 	^= 	Assignment 	x ^= y
3 	|= 	Assignment 	x |= y
  	  	  	 
2 	yield 	Pause Function 	yield x
1 	, 	Comma 	5 , 6
*/