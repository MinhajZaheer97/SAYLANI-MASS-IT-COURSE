var display = document.querySelector(".cal-display");
var btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var BtnsText = this.innerHTML; // this is liye lagaya he take wo us specific button ke text ko le sake jispe click ho rha he
    // var output = eval(display.innerText);
    if (BtnsText === "=") {
     
     var output = eval(display.innerText);
      display.innerText = output;
    } 
    else if (BtnsText === "AC") {
      display.innerHTML = "";
    } else if (BtnsText === "DEL") {
      display.innerText = display.innerText.slice(0, -1);
    }
    else display.innerText += BtnsText;
  });
});
