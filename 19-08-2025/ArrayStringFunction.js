// function greet(name){
//     console.log(`Hi ${name}, welcome to our site`);
// }

// greet("Randeep") 

// function lastdigit(num1, num2) {
//     let answer;
//     let a = lastIndexOf(num1);
//     let b = lastIndexOf(num2);

//     if (a == b) {
//         answer = 'true';
//     }
//     else {
//         answer = 'false';
//     }

//     return answer;

// }

// lastdigit(123,123);


// function lastDigit(num1, num2) {
//     // Get last digit of each number
//     const last1 = Math.floor(num1/10);
//     const last2 = Math.floor(num2/10);
//     // Compare and return result
//     console.log(last1, last2);
// }

// lastDigit(123, 12543);


//............Arrays...................


// const arr = [1,2,3,4,5,6,7,8,9,10];

// const array = new Array(1,2,3,3,4,5)

// console.log(array.indexOf(3))

// console.log(array.includes(3))

// console.log(array.slice(1))

// console.log(array.slice(-1))

// array.splice(2,0,12);

// console.log(array)

// let mergedArray = arr.concat(array);

// console.log(mergedArray);


/* ******   LOOPS IN ARRAY   ******* */


// const names = ["Randeep", "Ravi", 'Ankul', 'Dhiraj']

// for(let i=0; i < names.length; i++){
//     console.log(`${names[i]} index number is ${i}`)
// }



//Complete the findDuplicate function
// Do not alter the starter code.

// let arr = [4, 2, 34, 4, 1,4,5,6,7,5,,6,5,6,6, 12, 1, 4];
// function findDuplicate(arr){
// //Implement your function here
//     let mainArr = [];
//     let duplicatesArr = [];
//     for (let i of arr) {
//         if (mainArr.includes(i)) {
//             if(duplicatesArr.includes(i)){
//                 continue;
//             }
//             else{
//                 duplicatesArr.push(i);
//             }
//         }
        
//         else{
//             mainArr.push(i)
//         }
//     }
//     return duplicatesArr;
// }    
// console.log(findDuplicate(arr));



// function sumOfArray(arr) {
//     let arraySum = 0;
//     for (let i of arr) {
//         i = Number(i);
//         if (i % 2 === 0 && i % 5 !== 0) {
//             arraySum += i;
//         }
//     }
//     return arraySum;
// }

// // Example usage:
// console.log(sumOfArray([1, 6, 8, 3, 5, 20, 10])); // Output: 14


// function findTheNumber(arr,ele) {
//     let answer = -1;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == ele) {
//             answer = i
//         }

//     }
//     return answer;
// }

// findTheNumber([1,2,3,4,5,6,7,8,9], 5)




//complete the calculatePrice function
//Do not alter the starter code
// const goods = {
//   apple: { price: 150, quantity: 2 },
//   banana: { price: 75, quantity: 3 },
//   orange: { price: 125, quantity: 1 },
// };


// //   // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
// function calculatePrice(goods) {
//   // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
//   let totalPrice = 0;

//   // Hint 2: Loop through each item in the goods object
//   for (const item in goods) {
//     // Hint 3: Use object destructuring to extract the price and quantity of each item
//     const { price, quantity } = goods[item];

//     // Hint 4: Calculate the total price for each item and add it to the totalPrice
//     totalPrice += price * quantity;
//   }

//   // Hint 5: Return the totalPrice after the loop
//   return totalPrice;

//   // Hint 3: Use object destructuring to extract the price and quantity of each item

//   // Hint 4: Calculate the total price for each item and add it to the totalPrice

//   // Hint 5: Return the totalPrice after the loop
// }
// console.log(calculatePrice(goods));
// //output : 650
