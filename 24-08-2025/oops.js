// // Person class definition
// class Person {
//     // Constructor to initialize properties
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
    
//     // Method to introduce the person
//     speak() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Student class definition
// class Student {
//     // Constructor that accepts a Person object, major, and gpa
//     constructor(person, major, gpa) {
//         this.person = person;
//         this.major = major;
//         this.gpa = gpa;
//     }
    
//     // Method to display study information
//     study() {
//         console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
//     }
    
//     // Method to introduce the student with academic info
//     speak() {
//         console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`);
//     }
// }

// // Example usage (as per your expected input)
// const person1 = new Person("John", 20, "M");

// person1.speak();

// const stud1 = new Student(person1, "CS", 9);

// stud1.speak();

// stud1.study();




class Vehicle {
    // Constructor to initialize properties

    #registrationNumber;

    constructor(make, model, year, registrationNumber) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#registrationNumber = registrationNumber;
    }

    // Method to display vehicle information
    displayInfo() {
        console.log(`Vehicle Info: ${this.year} ${this.make} ${this.model}`);
    }
}


class Car extends Vehicle {
    // Constructor to initialize properties
    constructor(make, model, year, registrationNumber, doors) {
        super(make, model, year, registrationNumber);
        this.doors = doors;
    }

    // Method to display car information
    displayInfo() {
        super.displayInfo();
        console.log(`Number of doors: ${this.doors}`);
    }
}


function Truck(make, model, year, registrationNumber, payloadCapacity) {
    Vehicle.call(this, make, model, year, registrationNumber);
    this.payloadCapacity = payloadCapacity;
}

// Inherit from Vehicle
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Method to display truck information
Truck.prototype.displayInfo = function() {
    Vehicle.prototype.displayInfo.call(this);
    console.log(`Payload capacity: ${this.payloadCapacity} tons`);
};