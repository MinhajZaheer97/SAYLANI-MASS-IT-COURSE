import { useState, useCallback , useEffect} from 'react'

function Passgen() {

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

    useEffect(()=>{
        randomPass()
    }, [length , numbers , characters])
    return (
        <div>
            <h1>
                password generator !
            </h1>
            <input type="text" value={passGen} readOnly />
            <input type="range" value={length} min={6} max={74} onChange={(e)=>{
                setLength(e.target.value)
            }
            }/>
            <label>length = {length}</label>
            <input type="checkbox" defaultChecked ={numbers} onChange={() => {
                setNumbers((prev) => !prev)
            }}></input>include num

            <input type='checkbox' checked ={characters} onChange={() => {
                setCharacters((prevs) => !prevs)
            }}>
            </input>include char
        </div>
    )
}

export default Passgen