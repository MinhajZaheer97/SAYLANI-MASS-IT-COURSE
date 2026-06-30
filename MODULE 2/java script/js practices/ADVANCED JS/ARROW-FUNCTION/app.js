// const add = (a, b) => a + b;

// console.log(add(2, 3));


// arrow function apne parent ke args ko access kar sakta hai, lekin apna arguments object nahi hota. Iska matlab hai ki agar aap arrow function ke andar arguments ka use karte hain, to wo parent function ke arguments ko refer karega, na ki apne arguments ko.


// | Feature            | Normal Function           | Arrow Function |
// | ------------------ | ------------------------- | -------------- |
// | Syntax             | Longer                    | Short          |
// | Own `this`         | Yes                       | No             |
// | Own `arguments`    | Yes                       | No             |
// | Constructor usable | Yes                       | No             |
// | Hoisted fully      | Function declaration only | No             |
// | Best for           | Methods                   | Callbacks      |




// function add(a, b) {
//     console.log(a + b);
//     console.log("minu");    
// }
// const add = (a, b) => {
//     console.log(a + b);
//     console.log("minu");
    
// }


// add(2, 3);



// const num = () => {
//     console.log(number);
    
// }

// num(5);


// function test(a, b) {
//   console.log(arguments);
// }

// test(10, 20);


// Normal Function Execution Context

// Normal function ka context usually contain karta hai:

// {
//   variables,
//   scopeChain,
//   this,
//   arguments
// }



// Arrow Function Execution Context

// Arrow function ka context simplified hota hai:

// {
//   variables,
//   scopeChain
// }

// Aur:

// own this nahi
// own arguments nahi
// own super nahi
// own new.target nahi

// Ye outer lexical environment se le leta hai.




//                       SUMMARY    

// | Feature           | Normal Function | Arrow Function |
// | ----------------- | --------------- | -------------- |
// | Execution context | Yes             | Yes            |
// | Own `this`        | Yes             | No             |
// | Own `arguments`   | Yes             | No             |
// | Own scope         | Yes             | Yes            |
// | Call stack entry  | Yes             | Yes            |



// arrow function apne parent ka this use karsakta hai(jise LEXICAL THIS KEHTE HEN ) or us ka use kar ke value bhi nikal sakta hai or is ka apna this nahin hota.


//                                                THIS KEYWORD 

//this JavaScript ka ek special keyword hai jo current execution context ya current object ko refer karta hai.
//this = "abhi function kis object ke context mein run ho raha hai?"
//Lekin JS mein this fixed nahi hota.
// Ye depend karta hai function kis tarah call hua hai.
// Isi wajah se beginners confuse hote hain.
// 

//                                    FUNCTION MEN ARGUMENT


//arguments ek special object hai jo function ke andar available hota hai.
// Ye function ke arguments ko represent karta hai.
// Ye array-like hota hai, lekin array nahi hota.
// Isme length property hoti hai, lekin array methods nahi hote.
// Arrow functions mein arguments object nahi hota.



// const user = {
//   name: "Ali",

//   show() {
//     console.log(this.name);

//     setTimeout(function () {
//       console.log(this.name); // undefined ai ga kyunki setTimeout ka apna this hota hai, jo global object ko refer karta hai, aur global object mein name property nahi hoti.
//     }, 1000);
//   }
// };

// user.show();


//                 solution

// const user = {
//   name: "Ali",

//   show() {
//     console.log(this.name);
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.show();