var names = ["ali", "ahmed", "fawwad"];
var score = [320, 230, 480];
var percentage = [
  (score[0] / 500) * 100,
  (score[1] / 500) * 100,
  (score[2] / 500) * 100,
];

document.write(
  `score of ${names[0]} is ${score[0]} . percentage:${percentage[0]}% <br>`
);



document.write(
  `score of ${names[1]} is ${score[1]} . percentage:${percentage[1]}% <br>`
);



document.write(
  `score of ${names[2]} is ${score[2]} . percentage:${percentage[2]}% <br>`
);
