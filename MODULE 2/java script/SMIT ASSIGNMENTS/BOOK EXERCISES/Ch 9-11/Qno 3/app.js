

var color = prompt("Enter traffic signal color").toLowerCase();

if(color === "red"){
    alert("Must Stop");
}
else if(color === "yellow"){
    alert("Ready to move");
}
else if(color === "green"){
    alert("Move now");
}
else{
    alert("Invalid Signal Color");
}