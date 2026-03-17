var inputdiv = document.querySelector(".input-div");
var UserName = document.querySelector(".username");
var ContinueBtn = document.querySelector(".countinuebtn");
var h1 = document.querySelector(".quiz-title");

function Userdata(name) {
    this.name = name;
}

function usernamecheck() {
    if (UserName.value.trim() === "") {
        alert("please enter your name...");
        return false; //  ye false isliye lagaya take jab user kuch enter nahin kar to value false return ho or jab function call kia jai to us ki value false receive ho
    }
    return true;
}

var selected_option_1 = "";
var selected_option_2 = "";
var selected_option_3 = "";
var selected_option_4 = "";
var selected_option_5 = "";

function createmcq() {
    inputdiv.style.display = "none";
    h1.style.display = "none";

    var container = document.createElement("div");
    container.setAttribute("class", "main");

    var Quiz_1 = document.createElement("div");
    Quiz_1.setAttribute("class", "container");

    var Quiz_1_P = document.createElement("p");
    Quiz_1_P.setAttribute("class", "Quiz_1_P P");
    Quiz_1_P.innerText = "MCQ NUMBER:1";

    var Quiz_1_Q = document.createElement("p");
    Quiz_1_Q.setAttribute("class", "Quiz_1_Q Q");
    Quiz_1_Q.innerText = "Which is the largest city in the world ?";

    var OptionContainer = document.createElement("div");
    OptionContainer.setAttribute("class", "Optionscontainer");

    var option_1 = document.createElement("button");
    option_1.setAttribute("class", "option-1 options");
    option_1.innerText = "Pakistan";

    var option_2 = document.createElement("button");
    option_2.setAttribute("class", "option-2 options");
    option_2.innerText = "China";

    var option_3 = document.createElement("button");
    option_3.setAttribute("class", "option-3 options");
    option_3.innerText = "Russia";

    var option_4 = document.createElement("button");
    option_4.setAttribute("class", "option-4 options");
    option_4.innerText = "America";

    var nextbutton = document.createElement("button");
    nextbutton.setAttribute("class", "nextbutton");
    nextbutton.innerText = "Next";

    OptionContainer.appendChild(option_1);
    OptionContainer.appendChild(option_2);
    OptionContainer.appendChild(option_3);
    OptionContainer.appendChild(option_4);

    Quiz_1.appendChild(Quiz_1_P);
    Quiz_1.appendChild(Quiz_1_Q);
    Quiz_1.appendChild(OptionContainer);
    Quiz_1.appendChild(nextbutton);

    container.appendChild(Quiz_1);

    document.body.appendChild(container);

    var options = document.querySelectorAll(".options");

    options.forEach(function (optionofmcq1) {
        optionofmcq1.addEventListener("click", function () {
            selected_option_1 = optionofmcq1.innerText;
        });
    });

    // 2nd question

    var NextButtonofmcq1 = document.querySelector(".nextbutton");

    NextButtonofmcq1.addEventListener("click", function () {
        Quiz_1.style.display = "none";
        container.style.display = "none";

        var container_2 = document.createElement("div");
        container_2.setAttribute("class", "main-2 main");

        var Quiz_2 = document.createElement("div");
        Quiz_2.setAttribute("class", "container-2 container");

        var Quiz_2_P = document.createElement("p");
        Quiz_2_P.setAttribute("class", "Quiz_2_P P");
        Quiz_2_P.innerText = "MCQ NUMBER:2";

        var Quiz_2_Q = document.createElement("p");
        Quiz_2_Q.setAttribute("class", "Quiz_2_Q Q" );
        Quiz_2_Q.innerText = "what is the national language of Pakistan ?";

        var OptionContainer_2 = document.createElement("div");
        OptionContainer_2.setAttribute("class", "Optionscontainer-2 Optionscontainer");

        var option_1 = document.createElement("button");
        option_1.setAttribute("class", "option-1 options-2 options");
        option_1.innerText = "german";

        var option_2 = document.createElement("button");
        option_2.setAttribute("class", "option-2 options-2 options");
        option_2.innerText = "urdu";

        var option_3 = document.createElement("button");
        option_3.setAttribute("class", "option-3 options-2 options");
        option_3.innerText = "english";

        var option_4 = document.createElement("button");
        option_4.setAttribute("class", "option-4 options-2 options");
        option_4.innerText = "arabic";

        var nextbutton_2 = document.createElement("button");
        nextbutton_2.setAttribute("class", "nextbutton-2 nextbutton");
        nextbutton_2.innerText = "Next";

        OptionContainer_2.appendChild(option_1);
        OptionContainer_2.appendChild(option_2);
        OptionContainer_2.appendChild(option_3);
        OptionContainer_2.appendChild(option_4);

        Quiz_2.appendChild(Quiz_2_P);
        Quiz_2.appendChild(Quiz_2_Q);
        Quiz_2.appendChild(OptionContainer_2);
        Quiz_2.appendChild(nextbutton_2);

        container_2.appendChild(Quiz_2);

        document.body.appendChild(container_2);

        var options = document.querySelectorAll(".options-2");

        options.forEach(function (option0fmcq2) {
            option0fmcq2.addEventListener("click", function () {
                selected_option_2 = option0fmcq2.innerText;
            });
        });

        // mcq 3

        var NextButtonofmcq3 = document.querySelector(".nextbutton-2");

        NextButtonofmcq3.addEventListener("click", function () {
            Quiz_2.style.display = "none";
            container_2.style.display = "none";

            var container_3 = document.createElement("div");
            container_3.setAttribute("class", "main-3 main");

            var Quiz_3 = document.createElement("div");
            Quiz_3.setAttribute("class", "container-3 container");

            var Quiz_3_P = document.createElement("p");
            Quiz_3_P.setAttribute("class", "Quiz_3_P P");
            Quiz_3_P.innerText = "MCQ NUMBER:3";

            var Quiz_3_Q = document.createElement("p");
            Quiz_3_Q.setAttribute("class", "Quiz_3_Q Q");
            Quiz_3_Q.innerText = "what is the capital of Iran ?";

            var OptionContainer_3 = document.createElement("div");
            OptionContainer_3.setAttribute("class", "Optionscontainer-3 Optionscontainer");

            var option_1 = document.createElement("button");
            option_1.setAttribute("class", "option-1 options-3 options");
            option_1.innerText = "makkah";

            var option_2 = document.createElement("button");
            option_2.setAttribute("class", "option-2 options-3 options");
            option_2.innerText = "karachi";

            var option_3 = document.createElement("button");
            option_3.setAttribute("class", "option-3 options-3 options");
            option_3.innerText = "newyork";

            var option_4 = document.createElement("button");
            option_4.setAttribute("class", "option-4 options-3 options");
            option_4.innerText = "tehran";

            var nextbutton_3 = document.createElement("button");
            nextbutton_3.setAttribute("class", "nextbutton-3 nextbutton");
            nextbutton_3.innerText = "Next";

            OptionContainer_3.appendChild(option_1);
            OptionContainer_3.appendChild(option_2);
            OptionContainer_3.appendChild(option_3);
            OptionContainer_3.appendChild(option_4);

            Quiz_3.appendChild(Quiz_3_P);
            Quiz_3.appendChild(Quiz_3_Q);
            Quiz_3.appendChild(OptionContainer_3);
            Quiz_3.appendChild(nextbutton_3);

            container_3.appendChild(Quiz_3);

            document.body.appendChild(container_3);

            var options = document.querySelectorAll(".options-3");

            options.forEach(function (option0fmcq3) {
                option0fmcq3.addEventListener("click", function () {
                    selected_option_3 = option0fmcq3.innerText;

                    // console.log(selected_option_1 , selected_option_2 , selected_option_3);
                });
            });

            // mcq 4

            var NextButtonofmcq4 = document.querySelector(".nextbutton-3");

            NextButtonofmcq4.addEventListener("click", function () {
                Quiz_3.style.display = "none";
                container_3.style.display = "none";

                var container_4 = document.createElement("div");
                container_4.setAttribute("class", "main-4 main");

                var Quiz_4 = document.createElement("div");
                Quiz_4.setAttribute("class", "container-4 container");

                var Quiz_4_P = document.createElement("p");
                Quiz_4_P.setAttribute("class", "Quiz_4_P P");
                Quiz_4_P.innerText = "MCQ NUMBER:4";

                var Quiz_4_Q = document.createElement("p");
                Quiz_4_Q.setAttribute("class", "Quiz_4_Q Q");
                Quiz_4_Q.innerText = "what is the full form of URL ?";

                var OptionContainer_4 = document.createElement("div");
                OptionContainer_4.setAttribute("class", "Optionscontainer-4 Optionscontainer");

                var option_1 = document.createElement("button");
                option_1.setAttribute("class", "option-1 options-4 options");
                option_1.innerText = "unique resource locator";

                var option_2 = document.createElement("button");
                option_2.setAttribute("class", "option-2 options-4 options");
                option_2.innerText = "Uniform Resource Locator";

                var option_3 = document.createElement("button");
                option_3.setAttribute("class", "option-3 options-4 options");
                option_3.innerText = "Uniform Resource link";

                var option_4 = document.createElement("button");
                option_4.setAttribute("class", "option-4 options-4 options");
                option_4.innerText = "universal remote locater";

                var nextbutton_4 = document.createElement("button");
                nextbutton_4.setAttribute("class", "nextbutton-4 nextbutton");
                nextbutton_4.innerText = "Next";

                OptionContainer_4.appendChild(option_1);
                OptionContainer_4.appendChild(option_2);
                OptionContainer_4.appendChild(option_3);
                OptionContainer_4.appendChild(option_4);

                Quiz_4.appendChild(Quiz_4_P);
                Quiz_4.appendChild(Quiz_4_Q);
                Quiz_4.appendChild(OptionContainer_4);
                Quiz_4.appendChild(nextbutton_4);

                container_4.appendChild(Quiz_4);

                document.body.appendChild(container_4);

                var options = document.querySelectorAll(".options-4");

                options.forEach(function (option0fmcq4) {
                    option0fmcq4.addEventListener("click", function () {
                        selected_option_4 = option0fmcq4.innerText;

                        // console.log(selected_option_1 , selected_option_2 , selected_option_3 , selected_option_4);
                    });
                });

                // mcq 5

                var NextButtonofmcq5 = document.querySelector(".nextbutton-4");

                NextButtonofmcq5.addEventListener("click", function () {
                    Quiz_4.style.display = "none";
                    container_4.style.display = "none";

                    var container_5 = document.createElement("div");
                    container_5.setAttribute("class", "main-5 main");

                    var Quiz_5 = document.createElement("div");
                    Quiz_5.setAttribute("class", "container-5 container");

                    var Quiz_5_P = document.createElement("p");
                    Quiz_5_P.setAttribute("class", "Quiz_5_P P");
                    Quiz_5_P.innerText = "MCQ NUMBER:5";

                    var Quiz_5_Q = document.createElement("p");
                    Quiz_5_Q.setAttribute("class", "Quiz_5_Q Q");
                    Quiz_5_Q.innerText = "who is the president of vetican city ?";

                    var OptionContainer_5 = document.createElement("div");
                    OptionContainer_5.setAttribute("class", "Optionscontainer-5 Optionscontainer");

                    var option_1 = document.createElement("button");
                    option_1.setAttribute("class", "option-1 options-5 options");
                    option_1.innerText = "imran khan";

                    var option_2 = document.createElement("button");
                    option_2.setAttribute("class", "option-2 options-5 options");
                    option_2.innerText = "larwis frananchis";

                    var option_3 = document.createElement("button");
                    option_3.setAttribute("class", "option-3 options-5 options");
                    option_3.innerText = "Sister Raffaella Petrini";

                    var option_4 = document.createElement("button");
                    option_4.setAttribute("class", "option-4 options-5  options");
                    option_4.innerText = "donal alberd";

                    var result = document.createElement("button");
                    result.setAttribute("class", "nextbutton-5 nextbutton");
                    result.innerText = "Next";

                    OptionContainer_5.appendChild(option_1);
                    OptionContainer_5.appendChild(option_2);
                    OptionContainer_5.appendChild(option_3);
                    OptionContainer_5.appendChild(option_4);

                    Quiz_5.appendChild(Quiz_5_P);
                    Quiz_5.appendChild(Quiz_5_Q);
                    Quiz_5.appendChild(OptionContainer_5);
                    Quiz_5.appendChild(result);

                    container_5.appendChild(Quiz_5);

                    document.body.appendChild(container_5);

                    var options = document.querySelectorAll(".options-5");

                    options.forEach(function (option0fmcq5) {
                        option0fmcq5.addEventListener("click", function () {
                            selected_option_5 = option0fmcq5.innerText;

                            console.log(
                                selected_option_1,
                                selected_option_2,
                                selected_option_3,
                                selected_option_4,
                                selected_option_5,
                            );
                        });
                    });

                    var RESULT = document.querySelector(".nextbutton-5");

                    var correct_1 = "Russia";
                    var correct_2 = "urdu";
                    var correct_3 = "tehran";
                    var correct_4 = "Uniform Resource Locator";
                    var correct_5 = "Sister Raffaella Petrini";

                    function resultcheck() {
                        var score = 0;

                        if (selected_option_1 === correct_1) {
                            score++;
                        }
                        if (selected_option_2 === correct_2) {
                            score++;
                        }
                        if (selected_option_3 === correct_3) {
                            score++;
                        }
                        if (selected_option_4 === correct_4) {
                            score++;
                        }
                        if (selected_option_5 === correct_5) {
                            score++;
                        }

                        var obtainedmarks = score * 10;

                        var grade;
                        if (obtainedmarks >= 30) {
                            grade = "passed";
                        } else {
                            grade = "failed";
                        }

                        return {
                            score: score,
                            grade: grade,
                            obtainedmarks: obtainedmarks,
                        };
                    }

                    RESULT.addEventListener("click", function () {
                        Quiz_5.style.display = "none";

                        var res = resultcheck();

                        var ResultContainer = document.createElement("div")
                        ResultContainer.setAttribute("class", "ResultContainer");

                    var link = document.createElement("p");
                    link.setAttribute("class", "link");
                    link.innerHTML = `For code visit my <a href="https://github.com/MinhajZaheer97/SAYLANI-MASS-IT-COURSE">GITHUB </a><br>
                    designed by Minhaj Zaheer `;

                        ResultContainer.innerHTML = `
                                                <h1>RESULT</h1>
                                                <p>Name: ${UserName.value}</p>
                                                <p class = 'p-Total Questions'>Total Questions: 5</p>
                                                <p class = 'p-Total Correct'>Total Correct: ${res.score}</p>
                                                <p class = 'p-total Marks'>Total Marks: 50</p>
                                                <p  class = 'p-Obtained Marks'>Obtained Marks: ${res.obtainedmarks}</p>
                                                <p class = 'p-passing marks'>Passing Marks: 30</p>
                                                <p class 'p-grade'>You are : ${res.grade}</p>
                                            `;

                        document.body.appendChild(ResultContainer);
                        ResultContainer.appendChild(link);
                    });
                });
            });
        });
    });
}

ContinueBtn.addEventListener("click", function () {
    if (usernamecheck()) {
        new Userdata(UserName.value.trim());
        createmcq();
    }
});
