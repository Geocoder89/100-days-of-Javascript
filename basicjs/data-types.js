/*
* Operators
* */



// this is exponentiation
console.log(2**4)

console.log(4**(1/2))

//Concantenation with strings
let s = 'my' + 'string'
console.log(s)

console.log('1' + 2);
console.log('2' + 1);


console.log(2 +2 + '2')

console.log('1' + 2 + 2);

//numeric conversion ......... Unary +

let x = 1;
console.log(+x);

//this converts non-numbers,the + operator converts non numbers the same as the number operator,the parse int converts when the argument passed is a string.
console.log(+true)
console.log(+"")




// assignment returning a value.
let a = 1;
let b =2

console.log(a);
console.log(b);


let c = 3 -(a = b + 1)

console.log(a)
console.log(c)



/*
* chaining assignments
* */
let d,e,f

d = e = f = 4 + 4

console.log(d)
console.log(e)
console.log(f)


//modification  in place

/*
* this is often done when we need to apply an operator to a variable and store the new result in the same variable as seen below
* */

let n = 2;
n+=5;
n*=2


/*
*
* increment and decrement
* increment++ increases a variable by 1
* decrement-- decreases a variable by 1
* it can only be added to a variable; doing 5++ or 5-- will generate an error.
* */

let counterA = 2;
counterA++
console.log(counterA)

let counterB = 3
counterB--
console.log(counterB)


/*
* increment and decrement operators
* ++ and -- can be placed either before or after variable
* when the operator goes after the variable it is in postfix form e.g counter++ and it is in prefix form when it is placed before the variable e.g ++counter;
*  they do the same thing they increase the counter by 1;
* prefix form returns the new value while the postfix form returns the old value prior to increment/decrement
* */

let counterC = 1;
let prefixA = ++counterC;
console.log(prefixA)


let counterD = 1
let postfixA = counterD++
console.log(postfixA)

let counterE = 1
console.log(2 * counterE)
counterE++

let counterF = 1

let counterG = ++counterF

console.log(counterF)
console.log(counterG)
