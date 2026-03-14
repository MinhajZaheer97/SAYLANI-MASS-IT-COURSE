var inputdiv = document.querySelector(".input-div")
var UserName = document.querySelector(".username")
var ContinueBtn = document.querySelector(".countinuebtn")

// function Userdata(name){
//     this.name= name ;
// }


function usernamecheck(){
    if (UserName.value.trim() === ""){
        alert("please enter your name...")
        return false; //  ye false isliye lagaya take jab user kuch enter nahin kar to value false return ho or jab function call kia jai to us ki value false receive ho
    }
    return true;
}

    var selected_option_1 = ""
    var selected_option_2 = ""
    var selected_option_3 = ""
    var selected_option_4 = ""
    var selected_option_5 = ""

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
    OptionContainer.setAttribute("class" , "Optionscontainer")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1 options")
    option_1.innerText = "Pakistan"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2 options")
    option_2.innerText = "China"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3 options")
    option_3.innerText = "Russia"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4 options")
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

    var options = document.querySelectorAll(".options")



    options.forEach(function(optionofmcq1){
        optionofmcq1.addEventListener("click" , function(){

        selected_option_1 = optionofmcq1.innerText
        })
    })











    // 2nd question







    var NextButtonofmcq1 = document.querySelector(".nextbutton")

    NextButtonofmcq1.addEventListener("click" , function(){

    Quiz_1.style.display = "none"

    var Quiz_2 = document.createElement('div')
    Quiz_2.setAttribute("class" , "container-2")

    var Quiz_2_P = document.createElement('p')
    Quiz_2_P.setAttribute("class" , "Quiz_2_P")
    Quiz_2_P.innerText = "MCQ NUMBER:2"

    var Quiz_2_Q = document.createElement('p')
    Quiz_2_Q.setAttribute("class" , "Quiz_2_Q")
    Quiz_2_Q.innerText = "what is the national language of Pakistan ?"

    var OptionContainer_2 = document.createElement('div')
    OptionContainer_2.setAttribute("class" , "Optionscontainer-2")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1 options-2")
    option_1.innerText = "german"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2 options-2")
    option_2.innerText = "urdu"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3 options-2")
    option_3.innerText = "english"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4 options-2")
    option_4.innerText = "arabic"

    var nextbutton_2 = document.createElement("button")
    nextbutton_2.setAttribute("class" , "nextbutton-2")
    nextbutton_2.innerText= "Next"



    OptionContainer_2.appendChild(option_1)
    OptionContainer_2.appendChild(option_2)
    OptionContainer_2.appendChild(option_3)
    OptionContainer_2.appendChild(option_4)

    Quiz_2.appendChild(Quiz_2_P)
    Quiz_2.appendChild(Quiz_2_Q)
    Quiz_2.appendChild(OptionContainer_2)
    Quiz_2.appendChild(nextbutton_2)

    document.body.appendChild(Quiz_2)

    var options = document.querySelectorAll(".options-2")

    options.forEach(function(option0fmcq2){
        option0fmcq2.addEventListener("click" , function(){

            selected_option_2 = option0fmcq2.innerText
        })
    })
         








                // mcq 3












    var NextButtonofmcq3 = document.querySelector(".nextbutton-2")

    NextButtonofmcq3.addEventListener("click" , function(){
    Quiz_2.style.display = "none"

    var Quiz_3 = document.createElement('div')
    Quiz_3.setAttribute("class" , "container-3")

    
    var Quiz_3_P = document.createElement('p')
    Quiz_3_P.setAttribute("class" , "Quiz_3_P")
    Quiz_3_P.innerText = "MCQ NUMBER:3"

    var Quiz_3_Q = document.createElement('p')
    Quiz_3_Q.setAttribute("class" , "Quiz_3_Q")
    Quiz_3_Q.innerText = "what is the capital of Iran ?"

    var OptionContainer_3 = document.createElement('div')
    OptionContainer_3.setAttribute("class" , "Optionscontainer-3")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1 options-3")
    option_1.innerText = "makkah"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2 options-3")
    option_2.innerText = "karachi"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3 options-3")
    option_3.innerText = "newyork"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4 options-3")
    option_4.innerText = "tehran"

    var nextbutton_3 = document.createElement("button")
    nextbutton_3.setAttribute("class" , "nextbutton-3")
    nextbutton_3.innerText= "Next"



    OptionContainer_3.appendChild(option_1)
    OptionContainer_3.appendChild(option_2)
    OptionContainer_3.appendChild(option_3)
    OptionContainer_3.appendChild(option_4)

    Quiz_3.appendChild(Quiz_3_P)
    Quiz_3.appendChild(Quiz_3_Q)
    Quiz_3.appendChild(OptionContainer_3)
    Quiz_3.appendChild(nextbutton_3)

    document.body.appendChild(Quiz_3)

    var options = document.querySelectorAll(".options-3")

    options.forEach(function(option0fmcq3){
        option0fmcq3.addEventListener("click" , function(){

            selected_option_3 = option0fmcq3.innerText


            // console.log(selected_option_1 , selected_option_2 , selected_option_3);
            
        })
    })







                    // mcq 4







    
    var NextButtonofmcq4 = document.querySelector(".nextbutton-3")

    NextButtonofmcq4.addEventListener("click" , function(){
    Quiz_3.style.display = "none"

    var Quiz_4 = document.createElement('div')
    Quiz_4.setAttribute("class" , "container-4")

    
    var Quiz_4_P = document.createElement('p')
    Quiz_4_P.setAttribute("class" , "Quiz_4_P")
    Quiz_4_P.innerText = "MCQ NUMBER:4"

    var Quiz_4_Q = document.createElement('p')
    Quiz_4_Q.setAttribute("class" , "Quiz_4_Q")
    Quiz_4_Q.innerText = "what is the full form of URL ?"

    var OptionContainer_4 = document.createElement('div')
    OptionContainer_4.setAttribute("class" , "Optionscontainer-4")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1 options-4")
    option_1.innerText = "unique resource locator"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2 options-4")
    option_2.innerText = "Uniform Resource Locator"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3 options-4")
    option_3.innerText = "Uniform Resource link"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4 options-4")
    option_4.innerText = "universal remote locater"

    var nextbutton_4 = document.createElement("button")
    nextbutton_4.setAttribute("class" , "nextbutton-4")
    nextbutton_4.innerText= "Next"



    OptionContainer_4.appendChild(option_1)
    OptionContainer_4.appendChild(option_2)
    OptionContainer_4.appendChild(option_3)
    OptionContainer_4.appendChild(option_4)

    Quiz_4.appendChild(Quiz_4_P)
    Quiz_4.appendChild(Quiz_4_Q)
    Quiz_4.appendChild(OptionContainer_4)
    Quiz_4.appendChild(nextbutton_4)

    document.body.appendChild(Quiz_4)

    var options = document.querySelectorAll(".options-4")

    options.forEach(function(option0fmcq4){
        option0fmcq4.addEventListener("click" , function(){

            selected_option_4 = option0fmcq4.innerText


            // console.log(selected_option_1 , selected_option_2 , selected_option_3 , selected_option_4);
            
        })
    })






                           

                                            // mcq 5











    var NextButtonofmcq5 = document.querySelector(".nextbutton-4")  


    NextButtonofmcq5.addEventListener("click" , function(){
    Quiz_4.style.display = "none"

    var Quiz_5 = document.createElement('div')
    Quiz_5.setAttribute("class" , "container-5")

    
    var Quiz_5_P = document.createElement('p')
    Quiz_5_P.setAttribute("class" , "Quiz_5_P")
    Quiz_5_P.innerText = "MCQ NUMBER:5"

    var Quiz_5_Q = document.createElement('p')
    Quiz_5_Q.setAttribute("class" , "Quiz_5_Q")
    Quiz_5_Q.innerText = "who is the president of vetican city ?"

    var OptionContainer_5 = document.createElement('div')
    OptionContainer_5.setAttribute("class" , "Optionscontainer-5")

    var option_1 = document.createElement('button')
    option_1.setAttribute("class" , "option-1 options-5")
    option_1.innerText = "imran khan"

    var option_2 = document.createElement('button')
    option_2.setAttribute("class" , "option-2 options-5")
    option_2.innerText = "larwis frananchis"

    var option_3 = document.createElement('button')
    option_3.setAttribute("class" , "option-3 options-5")
    option_3.innerText = "Sister Raffaella Petrini"

    var option_4 = document.createElement('button')
    option_4.setAttribute("class" , "option-4 options-5")
    option_4.innerText = "donal alberd"

    var result = document.createElement("button")
    result.setAttribute("class" , "nextbutton-5")
    result.innerText= "Next"



    OptionContainer_5.appendChild(option_1)
    OptionContainer_5.appendChild(option_2)
    OptionContainer_5.appendChild(option_3)
    OptionContainer_5.appendChild(option_4)

    Quiz_5.appendChild(Quiz_5_P)
    Quiz_5.appendChild(Quiz_5_Q)
    Quiz_5.appendChild(OptionContainer_5)
    Quiz_5.appendChild(result)

    document.body.appendChild(Quiz_5)

    var options = document.querySelectorAll(".options-5")

    options.forEach(function(option0fmcq5){
        option0fmcq5.addEventListener("click" , function(){

            selected_option_5 = option0fmcq5.innerText


            console.log(selected_option_1 , selected_option_2 , selected_option_3 , selected_option_4 , selected_option_5);
            
            })
        })


        var RESULT = document.querySelector(".result")

        RESULT.addEventListener("click" , function(){

        Quiz_5.style.display = "none"

        var result_container = document.createElement('div')
        result_container.setAttribute("class" , "result-container")

        var result_heading = document.createElement("h1")
        result_heading.setAttribute("class" ,  "result-heading")
        result_heading.innerText = "RESULT"

        var result_name = document.createElement('p')
        result_name.setAttribute("class" , "result-name")
        result_name.innerText = `Name = ${UserName.value}`

        var result_Q = document.createElement('p')
        result_Q.setAttribute("class" , "result-name")
        result_Q.innerText = `Total question = 5`

        var result_Q_correct = document.createElement('p')
        result_Q_correct.setAttribute("class" , "result-name")
        result_Q_correct.innerText = ""

        var result_Total_Marks = document.createElement('p')
        result_Total_Marks.setAttribute("class" , "result-name")
        result_Total_Marks.innerText = "Total marks = 50"

        var result_Marks_obtained = document.createElement('p')
        result_Marks_obtained.setAttribute("class" , "result-name")
        result_Marks_obtained.innerText = ""

        var result_Passing_marks = document.createElement('p')
        result_Passing_marks.setAttribute("class" , "result-name")
        result_Passing_marks.innerText = "Passing marks = 30"

        var result_grade = document.createElement('p')
        result_grade.setAttribute("class" , "result-name")
        result_grade.innerText = ""




        if (selected_option_1.innerText === "Russia" || selected_option_2.innerText === "urdu" || selected_option_3.innerText === "tehran" || selected_option_4.innerText === "Uniform Resource Locator" || selected_option_5 === "Sister Raffaella Petrini"){

            result_Q_correct.innerText = "Total correct = 5"
            result_Marks_obtained.innerText = "Obtained marks = 50"
            result_grade.innerText = "You are passed"

        }else if 
                (selected_option_1.innerText !== "Russia" || selected_option_2.innerText === "urdu" || selected_option_3.innerText === "tehran" || selected_option_4.innerText === "Uniform Resource Locator" || selected_option_5 === "Sister Raffaella Petrini"){

                    result_Q_correct.innerText = "Total correct = 4"
                    result_Marks_obtained.innerText = "Obtained marks = 40"
                    result_grade.innerText = "You are passed"

                }else if
                        (selected_option_1.innerText === "Russia" || selected_option_2.innerText !== "urdu" || selected_option_3.innerText === "tehran" || selected_option_4.innerText === "Uniform Resource Locator" || selected_option_5 === "Sister Raffaella Petrini"){

                            result_Q_correct.innerText = "Total correct = 4"
                            result_Marks_obtained.innerText = "Obtained marks = 40"
                            result_grade.innerText = "You are passed"

                        }else if 
                                (selected_option_1.innerText === "Russia" || selected_option_2.innerText === "urdu" || selected_option_3.innerText !== "tehran" || selected_option_4.innerText === "Uniform Resource Locator" || selected_option_5 === "Sister Raffaella Petrini"){

                                    result_Q_correct.innerText = "Total correct = 4"
                                    result_Marks_obtained.innerText = "Obtained marks = 40"
                                    result_grade.innerText = "You are passed"

                                }else if(selected_option_1.innerText === "Russia" || selected_option_2.innerText === "urdu" || selected_option_3.innerText === "tehran" || selected_option_4.innerText !== "Uniform Resource Locator" || selected_option_5 === "Sister Raffaella Petrini"){
                                    
                                    result_Q_correct.innerText = "Total correct = 4"
                                    result_Marks_obtained.innerText = "Obtained marks = 40"
                                    result_grade.innerText = "You are passed"

                                }else if 
                                        (selected_option_1.innerText === "Russia" || selected_option_2.innerText === "urdu" || selected_option_3.innerText === "tehran" || selected_option_4.innerText === "Uniform Resource Locator" || selected_option_5 !== "Sister Raffaella Petrini"){
                                                                                
                                            result_Q_correct.innerText = "Total correct = 4"
                                            result_Marks_obtained.innerText = "Obtained marks = 40"
                                            result_grade.innerText = "You are passed"

                                        }





        })




    })





    })






    
    })

    

    })
}


ContinueBtn.addEventListener("click" , function(){
    if (usernamecheck()){
    new Userdata(UserName.value.trim())
    createmcq()
}
  
})