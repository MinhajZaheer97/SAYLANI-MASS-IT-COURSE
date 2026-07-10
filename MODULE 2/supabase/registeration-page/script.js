// Kaksha/Project ke credentials yahan dalein
const SUPABASE_URL ="https://jgeyyvtcdarkwttqwwll.supabase.co";
const SUPABASE_ANON_KEY ="sb_publishable_Gv0DURddnlWKMkFXMzcCIg_qHiC5PWq";

// Supabase Client initialize karein (window.supabase se)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Form element ko select karein
const registerForm = document.getElementById("registerForm");
const messageElement = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Page refresh hone se rokein

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Loading status dikhane ke liye
  messageElement.textContent = "Registering user...";
  messageElement.style.color = "#4b5563";

  // Supabase Sign Up API call
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    // Agar koi error aata hai (jaise password chota ho ya galat email)
    messageElement.textContent = `Error: ${error.message}`;
    messageElement.style.color = "#dc2626"; // Red color
  } else {
    // Success message
    messageElement.textContent =
      "Registration Successful! Please check your email to confirm.";
    messageElement.style.color = "#16a34a"; // Green color
    registerForm.reset(); // Form clear karne ke liye
  }
});
