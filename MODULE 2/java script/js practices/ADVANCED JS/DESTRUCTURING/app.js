// let response = {
//   user: {
//     name: "Ali",
//     age: 20
//   }
// };


// console.log(response.user.name);










// Destructuring — Complete Summary 🔥
// What is Destructuring?
// Destructuring ES6 feature hai jo:

// Arrays aur Objects se values extract karke variables me store karta hai.


// Array Destructuring
// let arr = [10, 20];let [a, b] = arr;
// Internally almost:
// a = arr[0]b = arr[1]
// Important:


// Order matters


// Index-based extraction hoti hai



// Object Destructuring
// let user = {  name: "Ali",  age: 20};let { name, age } = user;
// Internally almost:
// name = user.nameage = user.age
// Important:


// Property names matter


// Order matter nahi karta



// Why Use Destructuring?
// Cleaner aur readable code ke liye.
// Instead of:
// response.user.nameresponse.user.ageresponse.user.email
// Use:
// let {  user: { name, age, email }} = response;

// Internal Working 🧠
// Destructuring:


// koi magic nahi


// sirf values extract karti hai


// engine internally property/index access karta hai


// variables create karta hai



// Important Features
// 1. Skipping Values
// let [a, , c] = [1,2,3];

// 2. Default Values
// let [a = 10] = [];

// 3. Rest Operator
// let [a, ...rest] = [1,2,3];

// 4. Variable Renaming
// let { name: username } = user;

// 5. Nested Destructuring
// let {  address: { city }} = user;

// 6. Function Parameter Destructuring
// function greet({name}) {}
// Very common in React.

// Real-World Usage 🚀
// Used heavily in:


// React


// APIs


// Node.js


// Frontend development


// Modern JavaScript


// Interviews



// Important Understanding 🔥
// Destructuring:
// ❌ data deeply copy nahi karti
// ❌ new object create nahi karti
// Ye mostly:
// ✔ extraction karti hai
// ✔ shortcuts provide karti hai
// ✔ cleaner variables banati hai

// Direct Access vs Destructuring
// Both correct hain:
// user.name
// and
// let { name } = user;
// Difference:


// readability


// convenience


// repeated access



// Mental Model 🧠
// Array Destructuring

// “Index ke basis pe values nikalo.”

// Object Destructuring

// “Property names ke basis pe values nikalo.”


// Interview-Level Final Definition 🎯
// Destructuring is an ES6 feature that allows extracting values from arrays and objects into variables using concise syntax.
// Arrays use index-based extraction, while objects use property-name-based extraction.
// It improves readability and is widely used in modern JavaScript, especially React and API handling.