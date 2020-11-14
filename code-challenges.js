// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.


// const divisible = (num) => {
//     if(num % 3 == 0){
//         return `${num} is divisible by three`
//     }else{
//         return `${num} is not divisible by three`
//     }
// }

// var num1 = 15
// // Expected output: "15 is divisible by three"

// var num2 = 0
// // Expected output: "0 is divisible by three"

// var num3 = -7
// // Expected output: "-7 is not divisble by three"

// console.log(divisible(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]


// const capital = (array) => {

//     let newArray = []

//     for (let index = 0; index < array.length; index++) {
//         newArray.push(array[index].toUpperCase())        
//     }

//     return newArray
// }

// console.log(capital(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]


const numSort = (array) =>{
    let numArray = []
    let finalArray = []
    // let smaller = -50
    numArray = array.filter(value => typeof value === 'number')

    finalArray = numArray.sort((a, b) => a - b);

    return finalArray

    // *******************Why doesnt the code below work?************************
    // for (let index = 0; index < numArray.length; index++) {
    //     if(numArray[index] > smaller){
    //         finalArray.push(numArray[index])
    //         smaller = numArray[index]
    //     }
    // }
    // return finalArray

    // *******************Why doesnt the code above work?************************

}

// console.log(numSort(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "throw"
// // Expected output: 3
// var vowelTester3 = "hello"



// const findVowel = (string) => {
//     let vowels = ["a", "e", "i", "o", "u", "y"]
//     let newArray = string.split("")
//     let final = 0
//     for (let index = 0; index < newArray.length; index++) {
//         if(final < 0 && newArray[index] === "a" || newArray[index] === "e"|| newArray[index] === "i"|| newArray[index] === "o"|| newArray[index] === "u"|| newArray[index] === "y" ){
//             final = newArray.indexOf(newArray[index])
//         }       
//     }
//     return final
// }

// console.log(findVowel(vowelTester2))





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


// const calculator = (num1, op, num2) => {

//     if(num1 === 0 || num2 === 0 && op ==="/"){
//         return "Can't divide by 0"
//     }
//     else if(op === "/"){
//         return num1 / num2
//     }else if(op === "-"){
//         return num1 - num2
//     }else if(op === "+"){
//         return num1 + num2
//     }else if (op === "*"){
//         return num1 * num2
//     }
// }

// console.log(calculator(3,"*", 3))

// // Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*", 9))
// // // Expected output: 27

// console.log(calculator(16, "-", 3))
// // // Expected output: 19

// console.log(calculator(89, "/", 0))
// // // Expected output: "Can't divide by 0!"
