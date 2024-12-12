// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// /js er default behavior hocche prototype. Means js er shob kichuj object. object hocche grandparent. array, string,..eder grandparent hocche object. object er shob method era access korte pare(inheritance). jodio shob usable na. ei behavior e prototype behavior. 
// object er por null. array,str ....tader parents theke inherit korte thakbe jotokkhon na null value pae.


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

/********************************* inheritance *////////////////////////////////////////////////
// EKTA OBJECT KE ONNO EKTA OBJECT ER ACCESS KIVABE DIBO?

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// console.log(TASupport.isAvailable);
console.log(TeachingSupport.makeVideo);
// console.log(Teacher.email);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); //jei string call dibe shei string er naam print hobe.
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()