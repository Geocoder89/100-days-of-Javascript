
//there are 8 type of variables


///////////////////////////////////////////////////////////////////////////
// Numbers
//////////////////////////////////////////////////////////////////////////

let n = 12345
n = 12.345

/*
* Numbers could be pure integers without decimal points or floating point number
* they are subject to mathematical operation eg addition,subtraction,division etc
* there are also special numeric values which belong to this data type
*
*1) infinity this is the mathematical infinity ∞. it is a special value that's greater than any number
* 2) NAN is more or less a computational error,it is the end result of an incorrect or an undefined mathematical operation,it is a sticky value and hence where there is a NAN somewhere in a mathematical expression it passes itself across to other values.
*
* 3) these are number types that represent integer values greater than (2^53 - 1) or -(2^53-1) for negatives,the big int values are created by appending n to the integer.
* */


// infinity in action

alert(1/0) // it should give infinity

alert(Infinity)


// NAN in action

alert('hello world'/2)

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


/* Strings
*  a string in js is surrounded by quotes
*
* there are 3 types of quotes  "",'',``
*  the Double and single quotes are simple quotes with virtually no difference between them Javascript sense.
* Backticks however are "functionality" quotes which allow us embed variables and expressions into a string by wrapping them into ${} this is what we call "template/string literals"
* */

let str = "hello";
let str2 = 'hello';
let sentence1= `this is another ${str}`

// string declaration

let name = 'John DOe'

//embed a variable into another using the template literal syntax

alert(`Hello ${name}`)

//embedding an expression into string

alert(`the result of ${1+2} is 3`)


/** Booleans(logical type)
 *  boolean types have only two values which are true and false.
 *  they are commonly used to store yes/no values; true means yes,while false means no
 *  they also come as a result of comparisons
 * */

// eg

let nameFieldChecked = true; // yes,name field is checked;
let ageFieldChecked = false; // no age field is not checked;


// booleans as comparison
let isLesser = 1 < 4

alert(isLesser)


/* null

* this forms a separate value which contains only a null value
*  it is used as a reference for a non existing object or a null pointer like in some other languages
* it represents nothing,empty or value unknown
*  */

let age = null; // it means the value of age is unknown.

/* Undefined
*  this makes a type of its own like null but it means that a value is declared but not unassigned
* it is possible to explicitly assign undefined to a variable
* */

let height;
alert(height)
newHeight = 100
newHeight = undefined;
alert(newHeight)


/*
Objects and symbols
* unlike other types that are primitive because they can contain only a single thing,property or value(be it string,number)..they store collections of data or more complex entities.
* symbol is used to create unique identifiers for objects.
*/


/* type of operator
* this returns the type of the argument,it is useful when we want to process values of different types differently or do a quick check
* ways of doing this is
*
* as an operator: typeof x
* as a function: typeof(x)
 */


alert(typeof undefined)

alert(typeof (10n))
alert(typeof `foo`)


