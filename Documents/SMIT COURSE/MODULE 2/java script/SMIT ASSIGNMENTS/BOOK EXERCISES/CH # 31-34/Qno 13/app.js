

var age = prompt("Enter your age");
var now = new Date();


var brthYear = now.getFullYear() - age;

document.write("Your age is " + age + "<br>Your birth year is " + brthYear);