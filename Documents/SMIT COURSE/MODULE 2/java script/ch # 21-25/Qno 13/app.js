var userName = prompt("Enter your username:");
var isValid = true;
// Loop chala ke check kar rahe hen har character ko
for (var i = 0; i < userName.length; i++) {
    var code = userName.charCodeAt(i);
    // 33(!), 44(,), 46(.), 64(@) ASCII codes hain
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        alert("Please enter a valid username");
        isValid = false;
        break; // ghalti mil gayi to loop rok do
    }
}
if(isValid) {
    console.log("Username accepted");
}