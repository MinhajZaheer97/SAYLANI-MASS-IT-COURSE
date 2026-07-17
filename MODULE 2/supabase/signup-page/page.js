import {supabase} from "./script.js"
// localStorage.clear();

const userinfo = document.querySelector(".userinfo")

const user = JSON.parse(localStorage.getItem("userData"))

console.log(user.id);

const {data,error} = await supabase
    .from("users_data")
    .select('*')
    .eq('name' ,user.name)
    .single();

    
    if(error){
        console.log(error.message);
        
    }else{
        console.log(data.id);

    }

userinfo.innerHTML = `name = ${data.name} <br> gmail = ${data.gmail} <br> id = ${data.id}`
