//************************************************map & chaining***************************************************************

// callback: A function that is called on each element of the array.
/*  How array.map() Works---------->
1. map() iterates over each element in the array.
2. It applies the callback function to each element.
3. It creates a new array containing the results of each callback function execution.
4. The original array remains unchanged because map() is non-mutating.*/

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4]


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map array er prottekta value ke modify korbe. condition onujayi kaj kore na. filter() condition onujayi kaj kore.
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // ekhane uporer map er result pass hobe num param a.
                .filter( (num) => num >= 40) // ekhane uporer map er result pass hobe num param a. eivaabe pass hoite thakbe.

console.log(newNums);