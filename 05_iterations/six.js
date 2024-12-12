
// const coding = ["js", "ruby", "java", "python", "cpp"]

// 1. forEach method kono kichu return kore na. value return korlew undefined ashbe console a. 
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// 2. to solve this return issue use filter(). etaw callBackfn ney. filter automatic return kore. tai filter method variable a store kore then console a print korteb hoy ki return kore dekhar jonno--------->

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//2.1 use implicit return arrow fn
// const newNums = myNums.filter( (num) => num > 4 ) //implicit return
// console.log(newNums);

//2.2 use explicit return arrow fn
// const newNums = myNums.filter( (num) => { //ekhane {} new scope use kora hoise tai return keyword use korte hobe must. else output ashbe na undefined ashbe. eta explicit return
//     return num > 4
// } )


// 3. jodi forEach method diyei retun kora lagr then use this---->
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

//4. 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);