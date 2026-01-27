var userage = prompt('enter your date of birth')
var age = new Date(userage)
var today = new Date()

var msAge = age.getTime()
var msToday = today.getTime()

var msexactage = msToday - msAge;
 
var msexactageS = Math.floor(msexactage / 1000);
var msexactageMi = Math.floor(msexactageS / 60);
var msexactageH = Math.floor(msexactageMi / 60);
var msexactageD = Math.floor(msexactageH / 24);
var msexactageM = Math.floor(msexactageD / 30.44);
var msexactagey = Math.floor(msexactageD / 365.25);

var lastage = "your age is = " + msexactagey + " years " + msexactageM + " Months " + msexactageD + " Days " + msexactageH + " Hours " + msexactageMi + " Minutes " + msexactageS + " Seconds " + " and " + msexactage + " Milliseconds";

if (userage === ""){
    alert("you didnt enter any input!")
}else{
    alert(lastage)
}