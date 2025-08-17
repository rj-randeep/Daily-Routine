const Email = prompt("Enter your email address:");
const EmailLength = Email.length;

const dotIndex = Email.lastIndexOf(".");

const atIndex = Email.lastIndexOf("@");

const lastIndex = EmailLength - 1;

if(EmailLength > 11 || (lastIndex - dotIndex)<2 || (lastIndex - dotIndex)>3 || dotIndex - atIndex < 3){
    console.log("Invalid Email")
}