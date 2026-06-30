var button_1 = document.querySelector(".button-1")
var sound_1 = new Audio("sounds/clap.wav")

button_1.addEventListener("click", function() {
    sound_1.currentTime = 0
    sound_1.play()
})

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        sound_1.currentTime = 0
        sound_1.play()
    }
})