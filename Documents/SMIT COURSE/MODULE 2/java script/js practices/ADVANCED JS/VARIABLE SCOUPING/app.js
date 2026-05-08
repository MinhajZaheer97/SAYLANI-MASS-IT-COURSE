// let alert = "Hello";    // ✅ Built-in alert safe!
// window.alert("Test");   // Still works!
// console.log(alert);     // "Hello"

// var alert = "Hello";    // ❌ Built-in alert overwrite!
// alert("Test");          // TypeError: alert is not a function

// var name = "Ahmed";     // ❌ window.name pehle se hai (string)
// console.log(name);      // Confused behavior


// console.log(name);

// var name = "Ahmed";     // ❌ Temporal Dead Zone (TDZ) error

// console.log(name);


// let name = "Ahmed";     // ✅ let hoisting with uninitialized
// let name = "Ali";       // ❌ let redeclaration not allowed
// console.log(name);      // "Ahmed"


// var name = "Ahmed";     // ✅ var hoisting with undefined
// var name = "Ali";       // ✅ var redeclaration allowed
// console.log(name);      // "Ali"


// const name = "Ahmed";     // ✅ const hoisting with uninitialized
// const name = "Ali";       // ❌ const redeclaration not allowed
// console.log(name);      // "Ahmed"


// var name = "Ahmed";     
// let name = "Ali";

// console.log(name);SyntaxError: Identifier 'name' has already been declared





// Code Example	Result	Reason
// VAR + VAR	var x = 1; var x = 2;	✅ Works	Var allows redeclaration
// VAR + LET	var x = 1; let x = 2;	❌ SyntaxError	Same identifier conflict
// VAR + CONST	var x = 1; const x = 2;	❌ SyntaxError	Same identifier conflict
// LET + VAR	let x = 1; var x = 2;	❌ SyntaxError	Same identifier conflict
// LET + LET	let x = 1; let x = 2;	❌ SyntaxError	Let doesn't allow redeclaration
// LET + CONST	let x = 1; const x = 2;	❌ SyntaxError	Same identifier conflict
// CONST + VAR	const x = 1; var x = 2;	❌ SyntaxError	Same identifier conflict
// CONST + LET	const x = 1; let x = 2;	❌ SyntaxError	Same identifier conflict
// CONST + CONST	const x = 1; const x = 2;	❌ SyntaxError	Const doesn't allow redeclaration



// let or const men





// Block Scope Ke Saath Combinations:
// Combination	Code Example	Result	Reason
// VAR + LET (Block)	var x = 1; { let x = 2; }	✅ Works	Different scopes
// LET + VAR (Block)	let x = 1; { var x = 2; }	❌ SyntaxError	Global let + var conflict
// CONST + LET (Block)	const x = 1; { let x = 2; }	✅ Works	Different scopes
// LET + CONST (Block)	let x = 1; { const x = 2; }	✅ Works	Different scopes
// VAR + CONST (Block)	var x = 1; { const x = 2; }	❌ SyntaxError	Global var + const conflict
// CONST + VAR (Block)	const x = 1; { var x = 2; }	❌ SyntaxError	Global const + var conflict


// let x = 2; // Global scope

// {
//     let x = 1; // Block scope
//     console.log(x);
    
// }

// console.log(x);


// let x = 2 

// let x = 3

// console.log(x);
