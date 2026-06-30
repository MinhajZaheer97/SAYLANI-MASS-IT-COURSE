var ramadan = new Date("June 18, 2015");
var now = new Date();
var differ = now - ramadan;
var days = Math.floor(differ / (1000 * 60 * 60 * 24));

alert(days + " days have passed since 1st Ramadan, 2015");