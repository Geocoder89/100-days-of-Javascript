/*
* Comparison operators in js range from the typical comparison operators in maths to javascript operators like ==,=== != e.t.c
*
* a === b which is the double equality sign means the equality test as opposed to a = b which just means basic assignment.
* All Comparisons return a boolean result either true or false
* Examples
* */

console.log(2>1)
console.log(2== 1)
console.log(2 !=1)

/*
* Comparison results can be assigned to a variable just like any value
* */
let result = (5 >3)
console.log(result)
/*
* To see if a string is greater than the other,Javascript uses the "dictionary" or "lexicographical order",ie strings are compared to letter by letter to see which comes first or holds more characters(or has more length)
* it follows a unicode order more or less because for example "a" is actually greater in index unicode wise than "A"
* */


console.log( 'Z' > 'A' );
console.log( 'Glow' > 'Glee' );
console.log( 'Bee' > 'Be' );

/*
* Comparison of different types
* when comparing two different types say a number and a string...Javascript will convert the string values to numbers to aid the comparison
* */


console.log('2' > 1)


// for boolean values true becomes 1 and false becomes o


console.log (true == 1)
console.log (false == 0)

// for strict checks we use the === instead of the == because unlike the ==.it returns the proper boolean rather than seeking to convert them to be of similar types that the == does.

console.log(0 === false)  // it gives false because both sides are different, assuming it was  == it would return true because the == would see to convert 0 to false.


// sweet couple rule

/*
* for strict equality check a comparison between null and undefined returns false because they are different types.
* however for non strict checks they exhibit what is called the "sweet couple" rule,they equal each other and there is no need for type conversion
*
* undefined should not be compared because it returns NAN which will always return false on any comparison
* */

console.log(null === undefined)
