import { useState, useCallback } from 'react'

function App() {

    const [length, setLength] = useState(16)
    const [numbers, setNumbers] = useState(true)
    const [characters, setCharacters] = useState(true)
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

        
        setPassGen(password)
    }, [length, numbers, characters])
    
    return (
        <div>
            <h1>
                password generator !
            </h1>
            <input type="text" value={passGen} readOnly />
            <input type="range" value={length} min={0} max={74} onChange={
                randomPass
            }/>
            <input type="checkbox" onClick={() => {
                setNumbers((prev) => !prev)
                // randomPass()
            }}></input>include num

            <input type='checkbox' onClick={() => {
                setCharacters((prev) => !prev)
                // randomPass()
            }}>
            </input>include char


        </div>
    )
}

export default App