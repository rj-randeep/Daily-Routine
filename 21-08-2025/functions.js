// // ********************function Declaration********************

// function Sum1(a,b){
//     return a + b;
// }

// Sum1(4,5)

// // ********************Function Expression*************

// const Sum2 = function(a,b){
//     return a + b;
// }

// console.log("Sum2 value is " + Sum2(4,6))

// // ********************Arrow Function********************

// var prod = (Num1, Num2) => {
//     return Num1 * Num2;
// }

// console.log(prod(12,16));


// ********************IIFE (Immediately invoked function expression)********************

// (function(a,b){
//     console.log(a**b)
// })(4,3);

// const testing = (function(){
//     const data1 = {
//         fruit : "Banana",
//         Vegie : "Potato",
//         Powder : "Not Available",
//         Quantity : 12
//     }

//     function getFruits(){
//         console.log(data1.fruit);
//     }

//     function getVegie(){
//         console.log(data1.Vegie)
//     }

//     return {getFruits, getVegie};
// })();

// console.log(testing)

// testing.getVegie();


//**********Call Back Function */

// function greet(wish){
//     console.log(`${wish()}, Welcome to our site`)
// }

// function sayHi(){
//     return "Hi"
// }

// greet(sayHi);




/* Higher order Functions */

// inputs = [1,23,3,5,26,5,16,15,6,3,4]

// function operation(input, fn){
//     const output = [];
//     for(let num of input){
//         output.push(fn(num))
//     }
//     return output;
// }

// function square(number){
//     return number * number;
// }

// console.log(operation(inputs, square))

// function customMap(array, callbackFn) {
//     newArray = [];
//     for (let num of array) {
//         newArray.push(callbackFn(num))
//     }
//     return newArray;
// }

// function square(number) {
//     return number * number;
// }

// function double(number) {
//     return number + number;
// }

// console.log(customMap([2,3,4], square)) 



// ********** Currying Function ************

// function add2(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add2(2)(4)(6))


