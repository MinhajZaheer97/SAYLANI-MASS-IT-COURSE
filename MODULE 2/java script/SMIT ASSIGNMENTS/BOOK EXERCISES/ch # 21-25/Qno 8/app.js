var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&"); // global replacement ke liye regex use kia
document.write("Original: " + message + "<br>");
document.write("New: " + newMessage + "<br><br>");