


var username = prompt("Enter username:");

while (
  username.includes("@") ||
  username.includes(".") ||
  username.includes(",") ||
  username.includes("!")||
  username.includes(";")||
  username.includes("#")
  
) {
  username = prompt("invalid username. enter again:");
}

alert("valid username: " + username);