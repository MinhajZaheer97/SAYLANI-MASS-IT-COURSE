import { useState, useCallback } from 'react'

function App() {

    const [length, setLength] = useState(8)
    const [numbers, setNumbers] = useState(false)
    const [characters, setCharacters] = useState(false)
    const [passGen, setPassGen] = useState("")

    const randomPass = useCallback(() => {

        let pass;
        let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let password = "";

        if (numbers) {
            char += "0123456789"
        }

        if (characters) {
            char += "!@#$%^&*()_+"
        }

        for (let i = 1; i <= length; i++) {
            pass = Math.floor(Math.random() * char.length)
            password += char.charAt(pass)
        }
        // console.log(password);
        setPassGen(password)
    }, [length, numbers, characters ])
    return (
        <div>
            <h1>
                password generator !
            </h1>
            <input type="text" value={passGen} readOnly />
            <button onClick={()=>{
                setNumbers((prev) => !prev)
                randomPass()
                console.log(numbers);
                
                }}>include num</button>
            <button onClick={randomPass}>click</button>
        </div>
    )
}

export default App