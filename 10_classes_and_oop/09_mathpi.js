//kono object er property jate loop a access dite na chai then use property descriptor. set enumerable false. enumerable false korle loop korte parbo na oi particular property er upor.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

// Object.defineProperties(chai, {
//     name: {
//         writable: false,
//         enumerable: true,
//     },
//     price: {
//         writable: false,
//         enumerable: true,
//     },
//     isAvailable: {
//         writable: false,
//         enumerable: true,
//     },
    
// });

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}