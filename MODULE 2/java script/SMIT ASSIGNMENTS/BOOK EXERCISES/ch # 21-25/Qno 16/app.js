document.write("Counting<br>");

for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<br><br>");

document.write("Reverse counting<br>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<br><br>");

document.write("Even<br>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br><br>");

document.write("Odd<br>");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<br><br>");

document.write("Series<br>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
