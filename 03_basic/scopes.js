//var c = 300
let a = 300
if (true) {  // {} er vitor ja thakbe sheta block scope. er baire shob global scope. global scope er shob kichu block scope a access korte parbo. block scope er vitor ja thakbe shegula gloabal scope theke access kora jabe na. var ekhane jhamela kore. var block scope a declare kora hoilew global scope theke access kor jae. tai always avoid var. block scope er code global theke access korte chaile undefined ashbe. 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// upore variable 'a' 2 bar declare kora hoise. ekta global e and r ekta block e. global theke print dile output global variable er tai ashbe. r block scope theke console.log dile first a function dekhbe tar nijer kase oi variable ta ase kina. jodi thake then oita print. else global er ta print obe output a.


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//function onek vabe declare kora jae. ekhane 2 ta way shikhbo.


//1. normal function declare. in this case function call/execution function initialize er age access korte parbo. no error. But variable a function delclare kore eivabe access korte chaile error ashbe.

console.log(addone(5))

function addone(num){
    return num + 1
}


//2. variable a function delclare. age function call korle error ashbe jeta uporer tae aashbe na.
addTwo(5)
const addTwo = function(num){
    return num + 2
}