//          USING SET

// function removeDuplicateNumbers(arr) {
//     const removedDuplicates = [...new Set(arr)]
//     return removedDuplicates
// }
// console.log(removeDuplicateNumbers([1, 2, 2, 3, 4, 4, 5]));




//                       using include method




// function removeDuplicatenums(nums){
//     let removedDuplicates = []
//     for(let i = 0 ; i < nums.length ; i++){
//         if(!removedDuplicates.includes(nums[i])){
//             removedDuplicates.push(nums[i])
//         }
//     }
//     return removedDuplicates;
// }


// console.log(removeDuplicatenums([1,2,2,2,3,3,4,4,5]));



function removeDuplicates(arr){
    let removed = []
    for(i = 0 ; i < arr.length ; i++){
        
        let found = false;
        for(j = 0 ; j < removed.length; j++){
            if(arr[i] === removed[j]){
                found = true;
                break;
            }
        }
            if(!found){
                removed.push(arr[i])
            }
    }
    return removed
} 


// console.log(removeDuplicates([1,2,2,2,3,3,4,4,5]));


// for (let i = 0; i < 3; i++) {
// setTimeout(() => console.log(i), 100);
// }


// var a = 10;
// a = 20 
// console.log(a);


// let b = 20;


// function outer() {
//     let x = 10;

//     function inner() {
//     console.log(x,b);

//     }

//    return inner();
// }




// outer()


// const settings = { theme: 'dark' };
// const { layout: { width = 800 } = {} } = settings;
// console.log(lay);


// const settings = { theme: 'dark' };

// console.log({...settings});







// function swap([a, b]) {
//   [a, b] = [b, a];
//   return [a, b];
// }
// const arr = [1, 2];
// console.log(swap(arr), arr);



// let count = 0;
// const obj = null;
// const val = obj?.[count++];
// console.log(count)


// const arr = [3, 1, 2];
// const sorted = arr.sort();
// console.log(arr === sorted, arr)


// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }
// async function f() {
//   return 5;
// }
// const result = f();
// console.log(result)



const obj = {
  value: 42,
  getValue: function() {
    let value = ()=> this.value;
    return value();
  }
};
// console.log(obj.getValue());


// function first() { second(); console.log('first'); }
// function second() { console.log('second'); }
// first();

// console.log(x);
// var x = 5;

// var x = 10;
// {
//     const x = 5;
//     console.log(x);
    
// }



// let a = 1;
// function outer() {
//   let b = 2;
//   function inner() { console.log(a + b); }
//   inner();
// }
// outer();


// {
//     let a = 1;
// }

// console.log(a);

function counter() {
  let count = 0;
  return function() { count++; return count; };
}
const inc = counter();
console.log(inc());
console.log(inc());
