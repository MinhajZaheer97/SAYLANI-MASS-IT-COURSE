var userText = prompt("Enter text for Title Case:");
var firstChar = userText.slice(0, 1);
var otherChars = userText.slice(1);
var titleCase = firstChar.toUpperCase() + otherChars.toLowerCase();
document.write("User input: " + userText + "<br>");
document.write("Title case: " + titleCase + "<br><br>");
