// reduce

// const numbers = [2, 4, 6, 8, 7];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);


// Define the array of student scores
// const scores = [85, 90, 78, 88, 76, 95, 89];

// function findHighestScore(scores) {
//   // The goal is to find the highest score among the students.
//     let highestNum = 0;
//     const sum = scores.reduce(function highNum(accumulator, currentValue) {
//         if (highestNum >= currentValue) {
//             highestNum;
//         }
//         else {
//             highestNum = currentValue;
//         }
            
//     },0)
//   // Implement your logic below and return the highest score.
//     return highestNum;
// }

// console.log(findHighestScore(scores)); // Output should be 95


// *********** Filter Function


// const scores = [85, -90, 78, -88, 76, -95, 89];

// const positiveScores = scores.filter(score => score > 0);

// console.log(positiveScores);


// const words = ["apple", "banana", "kiwi", "grape", "watermelon"];
// const minLength = 5;

// // Function to filter words based on length
// function filterLongWords(words, minLength) {
//   // Use filter to return words that have a length greater than or equal to minLength
//     const filterValue = words.filter(word => word.length >= minLength);

//     return filterValue;
// }

// // Test the function 
// const result = filterLongWords(words, minLength);
// console.log(result); // Output: ["apple", "banana", "grape", "watermelon"] 



// ******************************* find() or findIndex()

// Example array
// const numbers = [4, 2, 7, 1, 9];


// const foundNumber = numbers.find(num => num > 5);
// console.log(foundNumber); // Output: 7

// const foundIndex = numbers.findIndex(num => num == 5);
// console.log(foundIndex); // Output: 2

// List of names
// const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// // Function 1: Find names
// function findNames(names, peopleName) {
//     const name = names.find(nam => nam == peopleName)
//     return name ? name : "Name not found";
// }

// // Function 2: Find index of a name
// function updateNamesIndex(names, peopleName) {
//     const name = names.findIndex(nam => nam == peopleName)
//     return name ? name : "Name not found";
// }

// // Example Usage: 
// console.log(findNames(names, "John")); // Output: "John"
// console.log(findNames(names, "Andrew")); // Output: "Name not found" 

// console.log(updateNamesIndex(names, "Emma")); // Output: 3
// console.log(updateNamesIndex(names, "Mark")); // Output: -1


// console.log(names.find(nam => nam == "John"));



// **************** THIS *****************


// console.log(this);

// const user = "Randeep Jangra";
// console.log(window.user);





// Do not alter the starter code

// const orders = [
//   {
//     orderNumber: 1,
//     items: [
//       { name: "Cappuccino", price: 3.5 },
//       { name: "Chocolate Croissant", price: 2.5 }
//     ]
//   },
//   {
//     orderNumber: 2,
//     items: [
//       { name: "Latte", price: 4.0 },
//       { name: "Blueberry Muffin", price: 2.75 }
//     ],
//     discountCode: "COFFEELOVER"
//   }
// ];

// // Function to calculate the total value of all orders
//     function totalOrderValue (){
//         let total = 0;
//         orders.forEach(order => {
//             const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
//             total += order.discountCode ? applyDiscount(order.discountCode, orderTotal) : orderTotal;
//         });
//         return total.toFixed(2);
//     }

// // Apply discounts if applicable
// function totalOrderValue(orders, applyDiscount) {
//   // Map over each order to calculate its total value
//   // Use the reduce method to sum the prices of all items in the order
//   // Check if a discountCode is present and apply the discount using the provided callback function
//   const grandTotal = orders.map(order => {
//     const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
//     return order.discountCode ? applyDiscount(order.discountCode, orderTotal) : orderTotal;
//   }).reduce((sum, total) => sum + total, 0);

//   return grandTotal.toFixed(2);
// }

//   // Your implementation should:

//   // 1. Calculate the total value for each order
//   // 2. Apply the discount (if any) using the applyDiscount callback
//   // 3. Sum up the totals for all orders
//   // 4. Return the final grand total rounded to 2 decimal places


// //Below is the callback function to calculate the discount
// const applyDiscount = (discountCode, total) => {
//   // Implement discount logic here
//   if (discountCode === "COFFEELOVER") {
//     return total * 0.8; // Apply 20% discount
//   }
//   return total;
// };




// Array from 1 to 100
// const arr = Array.from({ length: 100 }, (_, i) => i + 1);


// // Function to calculate the sum of all numbers in the array
// let open = [];
// let close = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j <= arr.length; j++) {
//         if (arr[i] % j === 0  && open.includes(arr[i]) === false) {
//             open.push(arr[i]);
//             if (close.includes(arr[i]) === true) {
//                 close.splice(close.indexOf(arr[i]), 1);
//             }
//         }
//         else if (arr[i] % j === 0 && close.includes(arr[i]) === false) {
//             close.push(arr[i]);
//             if (open.includes(arr[i]) === true) {
//                 open.splice(open.indexOf(arr[i]), 1);
//             }
//         }
//     }
// }

// console.log("Open doors: ", open);
// console.log("Closed doors: ", close);

// ***************** OBJECTS ******************

// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genres: ["Action", "Sci-Fi", "Thriller"],
//     ratings: {
//         IMDb: 8.8,
//         RottenTomatoes: 86
//     },
//     getDetails: function() {
//         return `${this.title} (${this.year}) - Directed by ${this.director}\nGenres: ${this.genres.join(", ")}\nRatings:\n  IMDb: ${this.ratings.IMDb}\n  Rotten Tomatoes: ${this.ratings.RottenTomatoes}%`;
//     }
    
// };


// console.log(movie.getDetails()); 202

// function getObjectDetails(person, DOBYear, WorkingIn) {
//     let obj = {
//         name: person,
//         age: new Date().getFullYear() - DOBYear,
//         occupation: WorkingIn
//     };
//     return obj;
// }

// const obj = getObjectDetails(prompt("Enter your name:"), prompt("Enter your year of birth:"), prompt("Enter your occupation:"));

// console.log(obj.name); // Output: John Doe
// console.log(obj.age); // Output: 31
// console.log(obj.occupation); // Output: Software Developer 


