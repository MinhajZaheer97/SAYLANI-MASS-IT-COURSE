var now = new Date();
var hourAgo = new Date();
hourAgo.setHours(now.getHours() - 1);
alert("Current date: " + now + "\n1 hour ago, it was " + hourAgo);