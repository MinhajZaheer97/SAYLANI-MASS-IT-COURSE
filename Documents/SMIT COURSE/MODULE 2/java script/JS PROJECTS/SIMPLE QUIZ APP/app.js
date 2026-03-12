var inputdiv = document.querySelector(".input-div")
var UserName = document.querySelector(".username")
var ContinueBtn = document.querySelector(".countinuebtn")

function Userdata(name){
    this.name= name ;
}
// var userdata = new Userdata(UserName.value)
function usernamecheck(){
    if (UserName.value.trim() === ""){
        alert("please enter your name...")
        return false; //  ye false isliye lagaya take jab user kuch enter nahin kar to value false return ho or jab function call kia jai tous ki value false receive ho
    }
    return true;
}


function createmcq(){
    inputdiv.style.display = "none"

    var Quiz_1 = document.createElement('div')
    Quiz_1.setAttribute("class" , "container")

    var Quiz_1_P = document.createElement('p')
    Quiz_1_P.setAttribute("class" , "Quiz_1_P")
    Quiz_1_P.innerText = "MCQ NUMBER:1"

    var Quiz_1_Q = document.createElement('p')
    Quiz_1_Q.setAttribute("class" , "Quiz_1_Q")
    Quiz_1_Q.innerText = "Which is the largest city in the world ?"

    var OptionContainer = document.createElement('div')
    OptionContainer.setAttribute("class" , "Options")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1")
    option_1.innerText = "Pakistan"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2")
    option_2.innerText = "China"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3")
    option_3.innerText = "Russia"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4")
    option_4.innerText = "America"

    var nextbutton = document.createElement("button")
    nextbutton.setAttribute("class" , "nextbutton")
    nextbutton.innerText= "Next"




    OptionContainer.appendChild(option_1)
    OptionContainer.appendChild(option_2)
    OptionContainer.appendChild(option_3)
    OptionContainer.appendChild(option_4)

    Quiz_1.appendChild(Quiz_1_P)
    Quiz_1.appendChild(Quiz_1_Q)
    Quiz_1.appendChild(OptionContainer)
    Quiz_1.appendChild(nextbutton)

    document.body.appendChild(Quiz_1)


}

ContinueBtn.addEventListener("click" , function(){
    if (usernamecheck()){
    new Userdata(UserName.value.trim())
    createmcq()
}
  
})

