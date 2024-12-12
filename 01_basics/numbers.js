// /*//////////////////////////////////////////Numbers in Javascript///////////////////////////////////////////*/

/**1. toFixed() returns a string not number --------> means decimal point er por koyta value thakbe. jodi number a decimal na thake then . bosay nibe.****/
const balance = new Number(100)
console.log(balance);
// console.log(balance.toString().length);
console.log(balance.toFixed(2)); //output: 100.00

const balance1 = new Number(100.00000)
console.log(balance.toFixed(2)); //output: 100.00

//2. toPrecision() also returns a string not a number.
const num = 123.456;

// Specifying 4 significant digits
console.log(num.toPrecision(4)); // Output: "123.5"

// Specifying 6 significant digits
console.log(num.toPrecision(6)); // Output: "123.456"

// Specifying 2 significant digits
console.log(num.toPrecision(2)); // Output: "1.2e+2" (scientific notation)

//more example
const otherNumber = 23.8966
otherNumber.toPrecision(3) // Output - 23.9
otherNumber1 = 123.8966
otherNumber1.toPrecision(3) // Output - 124    
otherNumber2 = 1123.8966
otherNumber2.toPrecision(3) // Output - 1.12e+3 (exponential value)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////NEXT/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. toLocaleString()
const number = 1234567.89;
// Default locale (browser locale)
console.log(number.toLocaleString()); // Output may vary based on user's locale, e.g., "1,234,567.89"

// Using options en means english. bn means bangla
console.log(number.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Output: "$1,234,567.89"

console.log(number.toLocaleString('en-BD', { style: 'currency', currency: 'BDT' }));
// Output: "BDT 1,234,567.89"

console.log(number.toLocaleString('bn-BD', { style: 'currency', currency: 'BDT' }));
// Output: "৳১,২৩,৪৫৭.৮৯"

console.log(number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));
// Output: "₹1,23,45,67.89"


// 4.+++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// Output: [Math: Math] (this displays the Math object, which contains mathematical constants and functions)

console.log(Math.abs(-4));
// Output: 4 (returns the absolute value of -4)

console.log(Math.round(4.5));
// Output: 5 (rounds 4.5 to the nearest integer)
console.log(Math.round(4.4));
// Output: 4 (rounds 4.4 to the nearest integer)

console.log(Math.ceil(4.2));
// Output: 5 (rounds 4.2 up to the nearest integer)

console.log(Math.floor(4.9));
// Output: 4 (rounds 4.9 down to the nearest integer)

console.log(Math.min(4, 3, 6, 8));
// Output: 3 (returns the smallest value among the arguments)

console.log(Math.max(4, 3, 6, 8));
// Output: 8 (returns the largest value among the arguments)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////NEXT/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. math.random always 0 theke 1 er mmoddhe value dey.

console.log(Math.random()); // 0 theke 1 er moddhe random number dibe ex: 0.7569648
console.log((Math.random()*10) + 1); //10 diye multiply korle 1 ghor left shift hobe ex:7.569648 to avoid (0 to 1 range) and +1 jate 0 na ashe value.
console.log(Math.floor(Math.random()*10) + 1); //floor val nibo ex: 7
//qus a jodi bole 10 theke 20 er moddhe random number daw-->
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula for customised range. (max - min + 1))--> for range and to avoid 0. + min to get min value 10




// ----- SUMMARY -----
// Note: Number has comparatively less prototype properties (methods) than String

// Methods with examples:
// 1. balance.toString() // This converts a number into string
// 2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
// 3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
//     - Use Cases 
//         a. After calculation of GST
//         b. In Ecommerce website


// 6. Other methods
//     .MAX_VALUE
//     .MIN_VALUE
//     .MAX_SAFE_INTEGER
//     .MIN_SAFE_INTEGER


