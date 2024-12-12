// 'this' keyword only current scope ke bujhae. this.kono variable likhle oi scope a jei variable thakbe oitake refer korbe. thats it. 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this.username ei scope er username: "hitesh" ke refer kortese. 
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //****************************global scope a eta print dile empty obj ashbe {} always. But browser er console a console.log(this); eta print dile window object ashbe (see doc). Interview: browser er vitor jei global object sheta holo window object. Age Js run koraar only way chilo browser er console. jei engine ei js code run korto oita only browser er vitor accessible chilo. pore oi engine browser theke ber kore run korar system ber kore. example: node, deno etc. 1. console.log(this); eita object er vitor kaj kore. 2. R only function er vitor console.log(this); dile node environment print hobe. 3. lastly, function er vitor (function jodi object er vitor na thake) console.log(this.username); print dile undefined ashbe.

//important--------------> normal function a this keyword use kora jabe jodi sheta object er vitor thake. not in arrow
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai1 = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//**************************************arrow */********************************************************************** */

//arrow function er vitor console.log(this) print dile empty obj ashbe. r console.log(this.username) dile undefined ashbe. this keyword object er vitor valomoto kaj kore.

const chai2 =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //// eta ke bole implicit return. remove '{} and return keyword' from arrow then it wil be implicit return. r explicit return hoilo normal function er vitor jei return keyword oita.

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return a () use kora better. naile object return possible na. undefined ashbe.

const addTwo = (num1, num2) => ({username: "hitesh"}) //ekhane object ta () er vitore rakhse. () use na korle undefined ashto. so implicit return a use (). thats it.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
