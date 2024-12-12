//****************************************************forEach loop in array */
// 1.
const coding = ["js", "ruby", "java", "python", "cpp"]
//forEach method er vitor callback function dite hoy. callBackfn er kono name thake na. normal fn jevabe likhtam oivabei likhbo but name baad. function er je parameter sheta index hishebe kaj kore. array theke ekta kore value niya function er parameter a boshay dey. forEach method array er length, iteration shob built in. forEach er parrameter er 3 ta access thake array er. 1.value, 2. index 3. full array 

// coding.forEach( function (val){
//     console.log(val);
// } )

// 2. Using arrow fn

// coding.forEach( (item) => {
//     console.log(item);
// } )

//3. forEach er vitor bahir theke function refer korbo. not call

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//4. forEach er vitor functiuon er parrameter er 3 ta access thake array er. 1.value, 2. index 3. full array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//5.array er vitor shob object thakle forEach use korle better. DB theke je value ashe sheta array format e ashe & array er vitor each val object hishebe thake.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { //here item refers myCodingmyCoding objects.
    
    console.log(item.languageName);
} )
