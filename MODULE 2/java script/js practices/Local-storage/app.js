let signin = document.querySelector(".signin")
let userName = document.querySelector(".name")
let userPass= document.querySelector(".pass")

signin.addEventListener("click" , ()=>{
if(userName.value !== "" && userPass.value !== ""){
    localStorage.setItem('userName', userName.value)
    console.log("hello");   
}
console.log(userName.value !== "",userPass.value !== "");

})

