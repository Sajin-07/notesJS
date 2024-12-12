const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

/***************nicher 2ta same. ekvabe korlei hobe.***************/
let accountState; //output undefined ashbe cause value set kora nai.
let accountState1 = undefined; //output undefined ashbe cause value set kora nai.

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// 

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
let temparature = null; // means empty not 0

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


/*****************************************************DATA TYPES***************************************************************************/

console.log(typeof undefined); // undefined
console.log(typeof null); // object   interview qus

// /////////////////////////////////////////////01_basics/03_conversionOperation.js////////////////////////////////////////////////////

let score = "hitesh"

console.log(typeof score); 
console.log(typeof(score));  // output--> string


let score1 = "33abc"
let valueInNumber = Number(score1)
console.log(typeof valueInNumber); //output-->number
console.log(valueInNumber); // NaN te convert hoy but type number

let score2 = null
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1); //output-->number
console.log(valueInNumber1); // 0 

let score3 = undefined
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2); //output-->number
console.log(valueInNumber2); // NaN

let score4 = true
let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber3); //output-->number
console.log(valueInNumber3); // 1 ;false hoile 0 ashbe

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //output: true

let isLoggedIn1 = "hitesh"
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);  //output: true

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); //output: false

let isLoggedIn3 = " "
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); //output: true

/////////////////////////////////////////
let someNumber = 55654
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //prefix
console.log(gameCounter);

let gameCounter1 = 100
gameCounter++; //postfix
console.log(gameCounter1);


/////////////////////////////////////////////////////////01_basics/04_comparision.js///////////////////////////////////

// console.log("2" > 1);
// console.log("02" > 1); 
//js automatically number a convert kore fele compare er shomoy

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* The reason is that an equality check (==) and comparisons (> < >= <=) work differently.
Comparisons convert null to a number, treating it as 0 but equality check convert null to NaN. That's why (3) null >= 0 is true and (1) null > 0 is false. */

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
// all undefined is NaN so all output false

// === 
// console.log("8" + 2); 
// console.log("8" - 2);
// console.log("8" * 2);
// console.log("8" / 2);
// console.log("8" >= 2);
// console.log("8" < 2);
// console.log("8" == 2);
// console.log("2" == 2);
// console.log("2" === 2);

// output:
// 82
// 6
// 16
// 4
// true
// false
// false
// true
// false
/*************************************************************DATA TYPES SUMMARY********************************************/

//  
.0
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //symbol unique value create korar jonno use hoy. symbol a same value pass korlew oita output a alada show korbe. 

const bigNumber = 3456543576654356754n //last a n use korle sheta bigInt number. scientific value use er jonno use hoy.

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/***********************************************  Stack and Heap***************** */

//          READ doCS

