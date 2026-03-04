var display = document.querySelector(".cal-display");
var buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var buttonText = this.innerText;
    console.log(buttonText);

    if (buttonText === "=") {
      try {
        display.innerText = eval(display.innerText);
        if (
          display.innerText === "undefined" ||
          display.innerText === "null" ||
          display.innerText === "NaN" ||
          display.innerText === "Infinity" ||
          display.innerText === "-Infinity"
        ) {
          display.innerText = "Error";
        }
      } catch (error) {
        alert("Error");
        display.innerText = "";
      }
    } else if (buttonText === "DEL") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (buttonText === "AC") {
      display.innerText = "";
    } else {
      display.innerText += buttonText;
    }
  });
});
