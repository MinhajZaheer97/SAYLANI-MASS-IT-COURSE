alert("the password is minu")
var pass = "minu"
var outpass = prompt("enter the password").toLowerCase()

if (outpass === ""){
    alert("enter the password")
}else if (pass === outpass){
    alert("correct")
}else{
    alert("incorrect")
}