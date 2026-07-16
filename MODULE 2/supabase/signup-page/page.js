import {supabase} from "./script.js"

const userinfo = document.querySelector(".userinfo")

const user = JSON.parse(localStorage.getItem("userData"))

console.log(user.name);

const {data,error} = await supabase
    .from("users_data")
    .select('*')
    .eq('name' ,user.name)
    .single();

    
    if(error){
        console.log(error.message);
        
    }else{
        console.log(data);

    }

userinfo.innerHTML = `name = ${data.name} <br> gmail = ${data.gmail}`