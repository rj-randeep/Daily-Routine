totalAmount = parseFloat(prompt("Enter the total amount:"));


if (totalAmount >= 100) {
        answer = totalAmount - ((totalAmount * 10) / 100);
    }
    else if (totalAmount >= 50 && totalAmount <= 99.99) {
        answer = totalAmount - ((totalAmount * 5) / 100);
    }
    else {
        answer = totalAmount;
  }

console.log("The final amount is: " + answer);