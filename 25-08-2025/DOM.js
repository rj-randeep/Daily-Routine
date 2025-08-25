// class Circle {
//     constructor (radius){
//         this.radius = radius;
//     }

//     getDiameter(){
//         console.log(this.radius * 2)
//     }
// }

// const circle = new Circle(4);

// circle.getDiameter();



// function main() {
//     //create your class here with the name Account with all the private properties and getter and setter

// class Account {
//     // Private properties using # prefix
//     #accountNumber;
//     #balance;
    
//     // Constructor that accepts account number and initializes balance to 0
//     constructor(accountNumber) {
//         this.#accountNumber = accountNumber;
//         this.#balance = 0;
//     }
    
//     // Getter method to access the current balance
//     get getbalance() {
//         return this.#balance;
//     }
    
//     // Setter method to update the balance with validation
//     set setbalance(value) {
//         if (value < 0) {
//             console.log("Please enter a positive value for the balance");
//             return;
//         }
//         this.#balance = value;
//     }
    
//     // Method to deposit funds
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }
    
//     // Method to withdraw funds with insufficient balance check
//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log("Insufficient balance");
//             return;
//         }
//         if (amount > 0) {
//             this.#balance -= amount;
//         }
//     }
// } 
  
//     const myAccount = new Account("1234567890");
//     myAccount.deposit(500);
//     myAccount.withdraw(200);
//     console.log(myAccount.getbalance); // output: 300
//     //Do not modify the return statement
//     return Account;
//   }
//   main();



// const today = new Date(2000);
// console.log(today)

// console.log(today.getMonth())


