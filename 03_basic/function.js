
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName //function reference
// sayMyName() //function execution

// function addTwoNumbers(number1, number2){//ekhane number1, number2 parameter


//     console.log(number1 + number2); 
// }
// console.log(addTwoNumbers(3, 5)); //ekhane number1, number2 arguments



function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    return number1 + number2 //return er por kono code thakle shegula print hobe na. unreachable.
}

const result = addTwoNumbers(3, 5) // function jodi kichu return kore taile shei return value variable a store kora possible. else variable print dile undefined ashbe.

// console.log("Result: ", result);

//console a undefined asha mane function kichu return kore na.
function loginUserMessage(username = "sam"){ //samhocche default value. user kono argument pass na korlew sam ust logged in output ashbe.
    if(!username){
        console.log("PLease enter a username");
        return //ei return execute hoile porer return a r jabe na.
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) //ekhane kono argument na dile output ashbe 'undefined just logged in'. to solve this if condition use hoise.
// console.log(loginUserMessage("hitesh")) 


function calculateCartPrice(val1, val2, ...num1){ //shopping cart a ...num1 erokom param use hoy
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));