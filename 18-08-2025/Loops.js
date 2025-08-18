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


let answer = 0;
let limit = prompt("Enter the limit : ")

  for (let j = 0; j <= limit; j++){
    for (let i = 2; i <= j; i++){
      if (j % i == 0) {
        break;
      }
      else {
        answer = answer + i;
      }
    }
  }