let year = 2015


if (year == 2015) {
  console.log('you are right')
} else {
  console.log('omo you are wrong')
}


// Truthy and falsy values in js
/*
* the number 0, an empty string "",null ,undefined and NAN are falsy values other values are truthy
*
* */


/* The ternary '?' operator

* this is a shorter syntax to determine the veracity of a conditon,if true carry out something if not you do another thing.
* it first evaluates the first side of the expression if it is fulfilled it evaluates the result as true else it returns false.
* */



let accessAllowed;
let age = 21

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

// a shorter way to do this is simple

let shorterAccessAllowed =(age > 18) ? true : false
console.log(`this is the comparison for shorterAllowed,${shorterAccessAllowed}`)


// logical operators

/*
* there are four logical operators in javascript
* || - the logical "or" operator
*  && - the logical "and" operator
*  ! - the logical "not" operator
*  ?? - 'the nullish coalescing operator
*  let's see them in further details
* */


// || (OR)

/* this operator is typically represented with two vertical line symbols

* in programming the logical OR operator manipulate boolean values alone if any of the arguments are true it returns true or else it returns false but in Javascript it portends more than this
* if the operand is not a boolean it can be converted to a boolean for evaaluation
*Most of the time, OR || is used in an if statement to test if any of the given conditions is true.


* */


console.log('these are examples of the or operator')
  console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false


console.log('in the case where one or more of the operands is not a boolean')
if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

/*
* For example:Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
*/


let hour = 9;

if (hour < 10 || hour > 18) {

  // it will evaluate that the first condition and it will evaluate it as true.
  console.log( 'The office is closed.' );
}


 // OR "||" finds the first truthy value
//

// result = value1 || value2 || value3;


/*
*Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand
A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
* */


console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)



// the Logical "AND" Operator (&&)

/*
* it is denoted or represented with two ampersands &&
*
* in classical programming it returns true if both operands are truthy and false otherwise.
* The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
* */



console.log('these are examples of the use case of the logical and operator')
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false );  // false

/*
* Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
* */


// !(the logical NOT Operator)

/*
* The boolean NOT operator is represented with an exclamation sign !.
* The operator accepts a single argument and does the following:

* Converts the operand to boolean type: true/false.
Returns the inverse value.
* */


console.log('this is what happens with the logical not operator')


console.log(false) //false
console.log(!0) // true
