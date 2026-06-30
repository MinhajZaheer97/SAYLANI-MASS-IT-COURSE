// const arr = [1, 2, 3];
// const mapped = arr.map((value,index,array) => {
//     console.log(value,index,array);
// });

// console.log(mapped);


// map() basically:

// loop lagata hai
// callback execute karta hai
// returned values collect karta hai
// new array banata hai

//map() callback ko 3 cheezen deta hai:

// array.map((value, index, array) => {})



//                   questions

//map() ko pata kese chalta he ke jo callback men ham ne value di he vo kia he (value, index, array). 

// Ans. map callbak ko 3 argument provide karta hai. value, index, array. jo ham ne jo likha(arr.map(item => item )) isme "item" ) he vo  sirf convention hai. ham kisi bhi naam se likh sakte hai. map() function ke andar jo callback function hota hai usko 3 argument provide kiye jate hai. pehla argument current element hota hai, dusra argument current index hota hai, aur teesra argument original array hota hai. example men item value ko represent karta hai, lekin ham ise kisi bhi naam se represent kar sakte hai.


//                           mind map of map()

// const arr = [1, 2, 3];
// function Map(value, index, array){
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i], i, array);
//     }
// }
// Map(1, 0, arr);


// const users = [
//     {
//         name: 'John',
//         age: 30,
//         profession: 'Developer'
//     },
//     {
//         name: 'Jane',
//         age: 25,
//         profession: 'Designer'
//     },
//     {
//         name: 'Doe',
//         age: 35,
//         profession: 'Manager'
//     },
//     {
//         name: 'Smith',
//         age: 28,
//         profession: 'Developer'
//     },
//     {
//         name: 'Emily',
//         age: 32,
//         profession: 'Designer'
//     }
// ]


// const userNames = users.map(user => user.name);
// const userAges = users.map(user => user.age);
// const userProfessions = users.map(user => user.profession);