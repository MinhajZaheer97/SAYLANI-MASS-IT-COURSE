import {supabase} from './supabaseClient.js'

const loginBtn = document.querySelector("#login-button");
const userName = document.querySelector("#username");
const userpass = document.querySelector("#password");
const useremail = document.querySelector("#email");

loginBtn.addEventListener("click", async () => {
  await supabase.auth.signUp({
    email: useremail.value,
    pass: userpass.value,
  });
});
