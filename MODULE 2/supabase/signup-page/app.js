import { supabase } from "./script.js";

const gmailInput = document.getElementById("gmail");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("btn");

let userdata

signupBtn?.addEventListener("click", async () => {
  console.log({
    gmail: gmailInput?.value,
    name: usernameInput?.value,
    password: passwordInput?.value,
  });

  
  const { data, error } = await supabase.auth.signUp({
      email: gmailInput?.value,
      password: passwordInput?.value,
    options: {
        data: {
            username: usernameInput?.value,
        },
    },
});

const { error: insertError } = await supabase.from("users_data").insert([
    {
        name: usernameInput.value,
        gmail: gmailInput.value,
    },
]);

if (insertError) {
    alert(insertError.message);
}
if (error) {
    alert(error.message);
    }
     else {
        window.location.replace("./page.html");
}
userdata = {
    gmail: gmailInput?.value,
    name: usernameInput?.value,
    password: passwordInput?.value,
    };

    localStorage.setItem("userData", JSON.stringify(userdata));
  
});


  let userexist = JSON.parse(localStorage.getItem("userData"));

  if (userexist) {
    window.location.replace("./page.html");
  }


