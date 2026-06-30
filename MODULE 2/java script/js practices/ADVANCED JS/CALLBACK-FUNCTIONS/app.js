// //                   types of functions in JS


// 1. Function Declaration

// Sabse classic function.

// function greet() {
//    console.log("Hello");
// }

// Features:

// hoisted hota hai
// declaration se pehle bhi call kar sakte ho

// Example:

// greet();

// function greet() {
//    console.log("Hello");
// }

// Works.

// 2. Function Expression

// Function ko variable me store karna.

// const greet = function() {
//    console.log("Hello");
// };

// Difference:

// variable rules follow karega
// declaration se pehle access nahi kar sakte

// Example:

// greet(); // Error

// const greet = function() {};
// 3. Arrow Function

// Modern short syntax.

// const greet = () => {
//    console.log("Hello");
// };

// Single line:

// const add = (a, b) => a + b;

// Important differences:

// apna this nahi hota
// arguments object nahi hota
// constructor ki tarah use nahi kar sakte

// Beginners galti karte hain:

// “Arrow function bas short form hai.”

// Nahi. Behavior bhi different hai.

// 4. Anonymous Function

// Jiska naam nahi hota.

// function() {
//    console.log("Hello");
// }

// Usually callback me use hota hai:

// setTimeout(function() {
//    console.log("Done");
// }, 1000);
// 5. Named Function Expression

// Function expression hai lekin naam bhi diya hua hai.

// const greet = function hello() {
//    console.log("Hello");
// };

// Rarely use hota hai.

// Mostly debugging me helpful.

// 6. Immediately Invoked Function Expression (IIFE)

// Function jo bante hi execute ho jaye.

// (function() {
//    console.log("Run immediately");
// })();

// Arrow version:

// (() => {
//    console.log("Run");
// })();

// Purane JS me scope create karne ke liye bohot use hota tha.

// 7. Callback Function

// Function jo doosre function ko pass kiya jaye.

// function greet(name) {
//    console.log(name);
// }

// function process(callback) {
//    callback("Ali");
// }

// process(greet);

// Ye syntax type se zyada usage pattern hai.

// 8. Higher Order Function

// Jo:

// function receive kare
// ya function return kare

// Example:

// function operation(callback) {
//    callback();
// }

// forEach, map, filter sab higher-order functions hain.

// 9. Constructor Function

// Objects create karne ke liye.

// function User(name) {
//    this.name = name;
// }

// const u1 = new User("Ali");

// new keyword use hota hai.

// Modern JS me classes zyada common hain.

// 10. Generator Function

// Execution pause/resume kar sakta hai.

// function* generator() {
//    yield 1;
//    yield 2;
// }

// Advanced topic hai.

// 11. Async Function

// Promises ke sath asynchronous code easier banata hai.

// async function test() {
//    return "Hello";
// }

// Usually await ke sath use hota hai.

// 12. Recursive Function

// Function jo khud ko call kare.

// function count(n) {
//    if (n === 0) return;

//    console.log(n);

//    count(n - 1);
// }



//                  callbacks in JS





// JS me functions first-class citizens hote hain.
// Iska matlab:

// variable me store ho sakte hain
// function se return ho sakte hain
// argument ki tarah pass ho sakte hain

// Isi wajah se callbacks possible hain.




// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   callback("Ali");
// }

// greet(greet);


// const greet = (name) => {
//   console.log("Hello " + name);
// }

// greet();


// function task(callback) {
//    console.log("Task started");
//    callback();
// }

// task(function() {
//    console.log("Task completed");
// });




// const greet = function() {
//     console.log("Hello World");
// }
// greet();



// const greet = () => console.log("Hello World")

// greet();


//                      setTimeout examples (1. )

// setTimeout(function() {
//     console.log("Hello after 1 second");
// }, 1000);  


//                                         (2.)

//setTimeout(() => {
//    console.log("Hello after 1 seconds");
//}, 1000);

//                                         (3.)

// function greet() {
//     console.log("Hello after 1 second");
// }

// setTimeout(greet, 1000);



