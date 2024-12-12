const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){ //constructor function through new keyword.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne =  new User("hitesh", 12, true) //js class er through te constructor function deyna. 'new' keyword er through te dey. tai 'new' hocche constructor function. ekhane new keyword use na korle undefined ashbe.
const userTwo =  new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor); //output: User ".constructor" nijer reference nije dey.
console.log(userTwo);
console.log(userOne);
// userTwo.greeting();