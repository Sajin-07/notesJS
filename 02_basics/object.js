// Object 2 vabe create kora jae. 1. singleton 2. object literals
//1. singleton obj example--> // const tinderUser = new Object()
//2. object literals example--> const tinderUser = {}


/////////////////////////////////////////////////////// object literals////////////////////////////////////////////

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//How to access value? use '.' or []. [] use korle "" string akare use korte hobe.
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"]) //jodi key "" er moddhe string akare thake then same vabe acccess. '.' diye eta aaccess possible na.
// console.log(JsUser[mySym]) //access symbol [] use kore.

////////////////////////////////////////////////case2//////////////////////////////////////////////////////
let mysymbol = Symbol('Key1');
let myobj = {
    name: "Shaharyar Ansari",
    id: 1232,
    [mysymbol] : 'rusaf'
}
console.log(typeof myobj.id);
console.log(typeof myobj[mysymbol]);
//evabe type of check korle value er type dekhabe. key er type dekhte chaile use below formula-->

console.log(JsUser)

// Function to check key types
function getKeyTypes(obj) {
  const keyTypes = {};

  // Get string and symbol keys
  for (const key of Reflect.ownKeys(obj)) {
    keyTypes[key.toString()] = typeof key; // Store key type
  }

  return keyTypes;
}
console.log(getKeyTypes(JsUser));
/////////////////////////////////////////////////////////////case3////////////////////////////////////////////////////
// freeze korle kew kichu channge korte parbe na.
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    return "Hello JS user";
}
JsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

////////////////////////////////////////////////////////case4///////////////////////////////////////////

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//obj merge korbo kemne??
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//Two way
//1. use Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4) //ekhane {} hocche target; mane obj1, obj2, obj4 merge hoye {} ei empty obj er vitor store hobe. Ei empty obj {} na dilew hobe (Object.assign(obj1, obj2, obj4)) but in that case obj1, obj2, obj4 merge hoye obj1 a store hobe.

//2. use spread operator: The spread operator allows for spreading (or copying) all properties of an object into another object.
const obj3 = {...obj1, ...obj2} 
// console.log(obj3);

//Properties from obj2 are copied to obj3 next. If obj2 has any properties with the same keys as in obj1, the values from obj2 will overwrite those from obj1 because obj2 is listed after obj1. Key same hole pore jeta merge hobe oitar ta boshbe.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // Output: { a: 1, b: 3, c: 4 }

/*In this example:
obj3 starts with { a: 1, b: 2 } (from obj1).
When spreading obj2, b is overwritten with 3, resulting in { a: 1, b: 3, c: 4 }*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //array te dibe
// console.log(Object.values(tinderUser)); // array te dibe 
// console.log(Object.entries(tinderUser)); // key:value pair kore array te return kore
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


///////////////////////////////////////////////////////////////////JSON :- JAVA SCRIPT OBJECT NOTATION/////////////////////////////////////////////

// JSON a key always string a hobe.
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

//https://randomuser.me/
//https://jsonformatter.org/
