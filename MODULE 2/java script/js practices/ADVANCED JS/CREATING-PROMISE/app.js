// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true; // Simulate success or failure
//     if (success) {
//       resolve("Operation completed successfully!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 1000);

// });

// console.log(promise);


// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error);
// });


const promise = new Promise((resolve, reject) => {
    if (true) {
        reject("Promise resolved successfully!");
    } else {
        resolve("Promise rejected!");
    }
})
promise.then((message)=> {
    console.log(message);
    
}).catch((error)=>{
    console.log(error);
    
})
                // !new keyword

// 1 . create an empty object.
// 2 . enable this.
// 3 . this keyword will point to that empty object.
// 4 . Set the value of this to the new object.
// 5 . return the new object.


// function Objectcreator(name, age) {
//     this.name = name;
//     this.age = age;
// }


// const person1 = new Objectcreator("Alice", 30);
// console.log(person1);