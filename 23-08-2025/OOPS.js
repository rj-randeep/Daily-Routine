 

//  function Movie(title, director, year, genres, ratings) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
//     this.genres = genres;
//     this.ratings = ratings;
// }

// const movie1 = new Movie(
//     "Inception",
//     "Christopher Nolan",
//     2010,
//     ["Action", "Sci-Fi", "Thriller"],
//     {
//         IMDb: 8.8,
//         RottenTomatoes: 86
//     }
// );

// const movie2 = new Movie(
//     "The Dark Knight",
//     "Christopher Nolan",
//     2008,
//     ["Action", "Crime", "Drama"],
//     {
//         IMDb: 9.0,
//         RottenTomatoes: 94
//     }
// );

// const movie3 = new Movie(
//     "Interstellar",
//     "Christopher Nolan",
//     2014,
//     ["Adventure", "Drama", "Sci-Fi"],
//     {
//         IMDb: 8.6,
//         RottenTomatoes: 72
//     }
// );

// console.log(movie1.title);
// console.log(movie2.title,movie2.year);
// console.log(movie3.title);


// function main(){
//   //Refactor the gadget constructor function
// const Gadget = function(brand, type) {
//   this.brand = brand;
//   this.type = type;


//   // Refactor the describeGadget() method here
//   this.describeGadget = ()=> {

//     return `This gadget is a ${type} from ${brand}.`;
//   };
// };
//   const gadget1 = new Gadget("sony","laptop");
//   console.log(gadget1.describeGadget()); 
//   // Do not modify the return statement
//  return Gadget; 
// }
// main();


// function Game(name, platform) {
//   this.name = name;
//   this.platform = platform;
// }

// const fifa = new Game("FIFA 21", "PlayStation 5");

// console.log(fifa.__proto__ === Game.prototype);
// console.log(fifa.__proto__.__proto__ === Object.prototype);


// let obj = {
//   name: "Sample Object",
//   type: "Example"
// };
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true


function Person(name) {
  this.name = name;
}

Person.prototype.age = 20;

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};



// Instructions:
// 1. Refactor the Book constructor to add the method to the prototype chain instead of creating copies.
// 2. Ensure that isClassic method is accessible to all instances of Book object.


// function Book(title, author, publicationYear) {
//   this.title = title;
//   this.author = author;
//   this.publicationYear = publicationYear;


//   // Make this function as a prototypal function

// }

// Book.prototype.isClassic = function () {
//   const currentYear = 2023;
//   const age = currentYear - this.publicationYear;
//   if (age >= 50) {
//     return "The book is from the classic collection";
//   }

//   return "The book is not a classic collection book";
// };

// // Create a few book objects
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
// const book2 = new Book("1984", "George Orwell", 1949);
// const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// // Consoling output
// console.log(book1.isClassic()); // Output: 63
// console.log(book3.isClassic()); // Output: 98

// let arr = [1,2,3];
// console.log(arr.constructor === Array);



// // Instructions:
// // 1. Implement the login method on the User prototype.
// // 2. Create a reusable loginFunction using the bind method, bound to the systemCredentials object.

// function User(displayName) {
//   this.displayName = displayName;
// }

// const systemCredentials = {
//   username: "system",
//   password: "pass123"
// };

// // Step 1: Implement login on prototype
// User.prototype.login = function (username, password) {
//   if (username === this.username && password === this.password) {
//     console.log("Login successful!");
//   } else {
//     console.log("Login failed!");
//   }
// };

// // Example usage:
// const user = new User("John Doe");

// // Step 2: Create reusable loginFunction bound to systemCredentials
// const loginFunction = user.login.bind(systemCredentials);

// loginFunction("system", "pass123");       // Expected output: "Login successful!"
// loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"



// function main() {
//   // Example usage:
//   const userProfile1 = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     city: "New York",
//     street: "123 Main St",
//     zipCode: "10001",
//   };

//   const userProfile2 = {
//     name: "Marry Jane",
//     email: "marry.jane@example.com",
//     city: "L.A",
//     street: "154 Washington Road",
//     zipCode: "10011",
//   };

//   function getUserInfo(profile, key) {
//     // Check if the key exists in the object
//       if (profile[key]) {
//           return profile[key];
//       }
//       else {
//           return "Not Available";
//     }
//     // write your code here 
//   }

//   console.log(getUserInfo(userProfile1, "name")); // Output: "John Doe"
//   console.log(getUserInfo(userProfile2, "city")); // Output: "L.A"
//   console.log(getUserInfo(userProfile1, "phoneNumber")); // Output: "Not available"

//   return getUserInfo;
// }

// main();





// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

// function updateProfile(user, updates) {
//     // Implement the code here
//      user = {...user,...updates};
//     return user;

//   }
  
//   function freezeProfile(user) {
//     // Implement the code here
//     return Object.freeze(user);

//   }


  


function main(){
//Create your constructor funtion with the name Shipment
    function Shipment(trackingNumber, status) {
        this.trackingNumber = trackingNumber;
        this.status = status;
    }
}

//Add the updateStatusAndResources using the object prototype
Shipment.prototype.updateStatusAndResources = function (newStatus, newResources) {
    this.status = newStatus;
    this.resources = newResources;
};

//Add the assignResource methods through Object prototype
Shipment.prototype.assignResource = function (resource) {
    if (!this.resources) {
        this.resources = [];
    }
    this.resources.push(resource);
};

//Create the object literal with tthe name TrackingSystem
const TrackingSystem = {
    shipments: [],
    addShipment: function (shipment) {
        this.shipments.push(shipment);
    },
    getShipment: function (trackingNumber) {
        return this.shipments.find(s => s.trackingNumber === trackingNumber);
    }
};

return {Shipment,TrackingSystem};
//do not modify any other code.
