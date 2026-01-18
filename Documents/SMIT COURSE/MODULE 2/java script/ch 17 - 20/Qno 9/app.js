var numbers = [24, 53, 78, 91, 12];
var max = numbers[0];



for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < max) {
    max = numbers[i];
  }
}



document.write("Array: " + numbers + "<br>");
document.write("smallest: " + max);