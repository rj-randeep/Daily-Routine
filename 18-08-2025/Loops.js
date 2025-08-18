// a = prompt("Enter a Value here: ")
// let b;

// for(let i = 2; i<a; i++){
//     if(a%i == 0){
//         console.log("Not a prime number")
//         b = false;
//         break;        
//     }
//     else{
//         b = true
//     }
// }
// if(b){
//     console.log("Prime Number")
// }

// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let randomNumber = Math.round(Math.random() * 10);

// let guessNumber;

// do{
//     guessNumber = prompt("Guess the number")
//     if(guessNumber > randomNumber){
//         console.log("You guess large number")
//     }
//     else if(guessNumber < randomNumber){
//         console.log("You guesss small number")
//     }
//     else{
//         console.log("Right Answer")
//     }
// }while(guessNumber != randomNumber)


// function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
//   let answer = principalAmount; // Initialize with principal amount
//   let year = 1; // Year counter

//   while (year <= numberOfYears) {
//     let interest = answer * annualInterestRate; // Calculate interest for the year
//     answer = answer + interest; // Add interest to the amount
//     year++;
//   }

//   return answer; // Final amount after all years
// }

// // Example usage:
// console.log(compoundInterest(500, 0.08, 5)); // Expected output: 734.66 (no rounding)


// let answer = 0;
// let limit = prompt("Enter the limit : ");

// for (let j = 2; j <= limit; j++) {
//   let isPrime = true;
//   for (let i = 2; i * i <= j; i++) { // No Math.sqrt, just i*i
//     if (j % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     answer += j;
//   }
// }
// console.log(answer);


// let amount = prompt("Enter the amount: ")

// let discount;

// switch(true){
//   case amount<500:
//     discount = 0;
//     break;

//   case 500<amount && amount<1000:
//     discount = 10;
//     break;
  
//   case 1000<amount && amount<2000:
//     discount = 20;
//     break;
//   case 2000<amount && amount<4000:
//     discount = 30;
//     break;
//   case 4000<amount && amount<5000:
//     discount = 40;
//     break;
//   case 5000<=amount:
//     discount = 50;
//     break;
//   default:
//     console.log("Enter a valid amount")
// }

// let dicsountedAmount = amount - (amount*(discount/100));

// console.log(dicsountedAmount);

