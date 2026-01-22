
var time = +prompt("enter time in hour format");


if (time >= 0 && time < 1200){
    alert("good mrning");
} else 
    if (time >= 1200 && time < 1700){
    alert("good aftrnoon");
} else 
    if (time >= 1700 && time < 2100){
    alert("good evening");
} else 
    if (time >= 2100 && time <= 2359){
    alert("good nigt");
} else {
    alert("invalid time");
}