var start2015 = new Date("January 1, 2015");
var now = new Date();
var diff = now - start2015;
var seconds = Math.floor(diff / 1000);
alert("On reference date " + now + ", " + seconds + " seconds had passed since beginning of 2015");