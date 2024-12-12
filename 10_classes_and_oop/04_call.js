// call er kaj ekta function er execution context onno ekta function  e pass kora.
// this hocche window object refer kore. 
// node environment a this referr empty object.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username) // ei line er problem hocche SetUsername call hoilew SetUsername function ei createUser fn err agei execute hoye jae and call stack theke ber hoye jay so ei fn er vitor SetUsername call korle lav nai. tai call use korte hoy and parameter a this keyword dite hoy. ei this keyword er vitor SetUsername er execution context thake. so acccess korte pare. so use porer line

    SetUsername.call(this, username) // use this
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

