var letter = prompt("Enter any character:");

var code = letter.charCodeAt(0);



if (code >= 48 && code <= 57) {
  alert("It is a number");
} else 
    if (code >= 65 && code <= 90) {
  alert("It is an uppercase letter");
} else
     if (code >= 97 && code <= 122) {
  alert("It is a lowercase letter");
} else {
  alert("It is not a number or letter");
}
