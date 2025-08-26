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

// let heading = document.querySelectorAll(".Heading")
// console.log(heading);


const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = 'btn1'

const division = document.querySelector("div");

division.appendChild(btn);

// Creating new elements
var parentElement = document.getElementById("parent");
var childElement = document.createElement("div");
var textNode = document.createTextNode("Hello, World!");
// Appending multiple elements to the parent element
parentElement.append(childElement, textNode);

// Creating a new element using backticks
var className = "my-class";
var content = "This is a new element";
var element = `<div class="${className}">${content}</div>`;

const p = document.querySelector('p');
p.addEventListener('click', clickPara);

function clickPara(){
    console.log('Para Clicked')
} 

console.log(p.previousElementSibling);
console.log(p.nextElementSibling);


document.body.addEventListener(
    'keydown',
    (event) => {
        console.log('keyPressed');
        console.log(event.key);
    }
)





















// //complete the addBlog function to add moveup, movedown and delete button.
// function addBlog(blog) {
//   const blogList = document.querySelector(".blog-list");

//   const newBox = document.createElement("div");
//   newBox.classList.add("blog-box");

//   const newBlogPost = document.createElement("div");
//   newBlogPost.classList.add("blog-post");
//   newBox.appendChild(newBlogPost);

//   const newBlogHeader = document.createElement("div");
//   newBlogHeader.classList.add("blog-header");
//   newBlogPost.appendChild(newBlogHeader);

//   const newBlogTitle = document.createElement("h2");
//   newBlogTitle.classList.add("blog-title");
//   newBlogTitle.textContent = blog.title;
//   newBlogHeader.appendChild(newBlogTitle);

//   const newBlogDate = document.createElement("p");
//   newBlogDate.classList.add("blog-date");
//   newBlogDate.textContent = blog.date;
//   newBlogHeader.appendChild(newBlogDate);

//   const newBlogContent = document.createElement("p");
//   newBlogContent.classList.add("blog-content");
//   newBlogContent.textContent = blog.content;
//   newBlogPost.appendChild(newBlogContent);

//   // create a new div with className blog-buttons and append it to newBox
//   const buttonContainer = document.createElement("div");
//   buttonContainer.classList.add("blog-buttons");

//   //Create delete button with class blog-button and delete
//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("blog-button", "delete");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", () => {
//   newBox.remove(); // removes the whole blog post
//   });

//   //Add event listerner to delete button
//   buttonContainer.appendChild(deleteBtn);
//   newBox.appendChild(buttonContainer);

//   blogList.appendChild(newBox);

//   // Add event listeners to the delete button
// }

// const blogData = [
//   {
//     title: "First Blog Post",
//     date: "January 1, 2022",
//     content: "This is the content of the first blog post.",
//   },
//   {
//     title: "Second Blog Post",
//     date: "February 1, 2022",
//     content: "This is the content of the second blog post.",
//   },
//   {
//     title: "Third Blog Post",
//     date: "March 1, 2022",
//     content: "This is the content of the third blog post.",
//   },
// ];

// blogData.forEach((blog) => addBlog(blog)); // Automatically call the function for each blog in the array


