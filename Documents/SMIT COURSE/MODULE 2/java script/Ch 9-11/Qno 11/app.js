var firstnum = Number(prompt("enter the 1st number"));
var secondnum = Number(prompt("enter the 2nd number"));
var operation = prompt("select the operations (+,-,*,/,% only)");

if (operation === "+") {
  alert("the number is " + (firstnum + secondnum).toFixed(4));
} else if (operation === "-") {
  alert("the number is " + (firstnum - secondnum).toFixed(4));
} else if (operation === "*") {
  alert("the number is " + (firstnum * secondnum).toFixed(4));
} else if (operation === "/") {
  alert("the number is " + (firstnum / secondnum).toFixed(4));
} else if (operation === "%") {
  alert("the number is " + (firstnum % secondnum).toFixed(4));
}
