// // ///////////////////////////////////////////////concat/////////////////////////////////////////////////////
// // const num1 = [1, 2, 3];
// // const num2 = [4, 5, 6];
// // const num3 = [7, 8, 9];

// // const numbers = num1.concat(num2, num3);

// // console.log(numbers);
// // // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


// // const num1 = [[1]];
// // const num2 = [2, [3]];

// // const numbers = num1.concat(num2);

// // console.log(numbers);
// // // results in [[1], 2, [3]]

// // // modify the first element of num1
// // num1[0].push(4);

// // console.log(numbers);
// // // results in [[1, 4], 2, [3]]

// // console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
// // console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =  createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()
