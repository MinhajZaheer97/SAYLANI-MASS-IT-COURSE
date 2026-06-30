// // =============================================
// // 1. DATA: Sirf questions yahan define karo
// // =============================================
// const questions = [
//   {
//     question: "Which is the largest country in the world?",
//     options: ["Pakistan", "China", "Russia", "America"],
//     correct: "Russia"
//   },
//   {
//     question: "What is the national language of Pakistan?",
//     options: ["German", "Urdu", "English", "Arabic"],
//     correct: "Urdu"
//   },
//   {
//     question: "What is the capital of Iran?",
//     options: ["Makkah", "Karachi", "New York", "Tehran"],
//     correct: "Tehran"
//   },
//   {
//     question: "What does URL stand for?",
//     options: ["Universal Remote Link", "Uniform Resource Locator", "Uniform Resource Link", "Universal Remote Locator"],
//     correct: "Uniform Resource Locator"
//   },
//   {
//     question: "Who is the president of Vatican City?",
//     options: ["Imran Khan", "Lewis Francis", "Sister Raffaella Petrini", "Donald Albert"],
//     correct: "Sister Raffaella Petrini"
//   }
// ];

// // =============================================
// // 2. STATE: Quiz ki current state track karo
// // =============================================
// let currentQuestion = 0;
// let score = 0;
// let selectedOption = null;
// let userName = "";

// // =============================================
// // 3. DOM REFERENCES
// // =============================================
// const inputDiv = document.querySelector(".input-div");
// const quizTitle = document.querySelector(".quiz-title");
// const usernameInput = document.querySelector(".username");
// const continueBtn = document.querySelector(".countinuebtn");

// // =============================================
// // 4. HELPER FUNCTIONS — Ek kaam, ek function
// // =============================================

// function validateUsername() {
//   if (usernameInput.value.trim() === "") {
//     alert("Please enter your name...");
//     return false;
//   }
//   return true;
// }

// // Yeh function ek question ka pura UI banata hai
// function renderQuestion(index) {
//   // Pehle purana question hata do
//   const existing = document.querySelector(".quiz-screen");
//   if (existing) existing.remove();

//   const q = questions[index];
//   selectedOption = null;

//   const screen = document.createElement("div");
//   screen.className = "quiz-screen main";

//   screen.innerHTML = `
//     <div class="container">
//       <p class="P">MCQ NUMBER: ${index + 1}</p>
//       <p class="Q">${q.question}</p>
//       <div class="Optionscontainer">
//         ${q.options.map(opt => `
//           <button class="options">${opt}</button>
//         `).join("")}
//       </div>
//       <button class="nextbutton">${index === questions.length - 1 ? "Submit" : "Next"}</button>
//     </div>
//   `;

//   document.body.appendChild(screen);

//   // Options pe click listener
//   screen.querySelectorAll(".options").forEach(btn => {
//     btn.addEventListener("click", () => {
//       // Pehle sab se active class hata do
//       screen.querySelectorAll(".options").forEach(b => b.classList.remove("active"));
//       btn.classList.add("active");
//       selectedOption = btn.innerText;
//     });
//   });

//   // Next/Submit button
//   screen.querySelector(".nextbutton").addEventListener("click", () => {
//     if (!selectedOption) {
//       alert("Please select an option!");
//       return;
//     }

//     if (selectedOption === q.correct) {
//       score++;
//     }

//     currentQuestion++;

//     if (currentQuestion < questions.length) {
//       renderQuestion(currentQuestion);  // Agla question
//     } else {
//       showResult();  // Quiz khatam
//     }
//   });
// }

// // Result screen
// function showResult() {
//   const existing = document.querySelector(".quiz-screen");
//   if (existing) existing.remove();

//   const obtained = score * 10;
//   const grade = obtained >= 30 ? "Passed ✅" : "Failed ❌";

//   const result = document.createElement("div");
//   result.className = "ResultContainer";
//   result.innerHTML = `
//     <h1>RESULT</h1>
//     <p>Name: ${userName}</p>
//     <p>Total Questions: ${questions.length}</p>
//     <p>Total Correct: ${score}</p>
//     <p>Total Marks: ${questions.length * 10}</p>
//     <p>Obtained Marks: ${obtained}</p>
//     <p>Passing Marks: 30</p>
//     <p>You are: <strong>${grade}</strong></p>
//     <p class="link">Code on <a href="https://github.com/MinhajZaheer97/SAYLANI-MASS-IT-COURSE">GitHub</a> — by Minhaj Zaheer</p>
//   `;

//   document.body.appendChild(result);
// }

// // =============================================
// // 5. START: Continue button click
// // =============================================
// continueBtn.addEventListener("click", () => {
//   if (!validateUsername()) return;

//   userName = usernameInput.value.trim();
//   inputDiv.style.display = "none";
//   quizTitle.style.display = "none";

//   renderQuestion(currentQuestion);
// });








































const questions = [
  {
    question: "Which is the largest country in the world?",
    options: ["Pakistan", "China", "Russia", "America"],
    correct: "Russia"
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["German", "Urdu", "English", "Arabic"],
    correct: "Urdu"
  },
  {
    question: "What is the capital of Iran?",
    options: ["Makkah", "Karachi", "New York", "Tehran"],
    correct: "Tehran"
  },
  {
    question: "What does URL stand for?",
    options: ["Universal Remote Link", "Uniform Resource Locator", "Uniform Resource Link", "Universal Remote Locator"],
    correct: "Uniform Resource Locator"
  },
  {
    question: "Who is the president of Vatican City?",
    options: ["Imran Khan", "Lewis Francis", "Sister Raffaella Petrini", "Donald Albert"],
    correct: "Sister Raffaella Petrini"
  }
];



console.log(questions[0].question);
console.log(questions[1].options[0]);

