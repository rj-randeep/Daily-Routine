
let marks = prompt("Enter your marks: ");

marks = Number(marks);

let result;
  //write your code here
  if (marks >= 90) {
    result = "A"
  }
  else if (marks >= 80 && marks < 90) {
    result = "B"
  }
  else if (marks >= 70 && marks < 80) {
    result = "C"
  }
  else if (marks >= 60 && marks < 70) { 
    result = "D"
  }
  else {
    result = "F"
}

console.log("Your grade is: " + result);