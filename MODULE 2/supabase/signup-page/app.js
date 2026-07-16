import { supabase } from './script.js'


const gmailInput = document.getElementById('gmail')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const signupBtn = document.getElementById('btn')

const {user , error} = await supabase.from('users_data').select("*").eq('gmail',gmailInput?.value).single()


// console.log('Supabase client ready:', !!supabase)

signupBtn?.addEventListener('click', async() => {
  console.log({
    gmail: gmailInput?.value,
    name: usernameInput?.value,
    password: passwordInput?.value,
  })

    await supabase.from('users_data').insert([
        {
            name: usernameInput?.value ,
            gmail: gmailInput?.value,   
            password: passwordInput?.value,
        }
    ]).select()

    const { data, error } = await supabase.auth.signUp({
        email: gmailInput?.value,
        password: passwordInput?.value,
        options: {
            data: {
                username: usernameInput?.value
            }
        }
    })

})
