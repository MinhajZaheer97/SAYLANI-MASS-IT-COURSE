import { useState, useCallback , useEffect} from 'react'
import './passgen.css'

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
    }, [length, numbers, characters ,setPassGen])

    useEffect(()=>{
        randomPass()
    }, [length , numbers , characters])

    let copy = useCallback(()=>{
        window.navigator.clipboard.writeText(passGen)
    }, [passGen])
    return (
        <div className="passgen">
            <div className="passgen-card">
                <h1 className="passgen-title">
                    password generator !
                </h1>
                <input className="passgen-field" type="text" value={passGen} readOnly /><button 
                onClick={copy} className="passgen-copy">copy</button>
                <input className="passgen-slider" type="range" value={length} min={6} max={74} onChange={(e)=>{
                    setLength(e.target.value)
                }
                }/>
                <label className="passgen-length-label">length = {length}</label>
                <div className="passgen-options">
                    <label className="passgen-option">
                        <input className="passgen-checkbox" type="checkbox" defaultChecked ={numbers} onChange={() => {
                            setNumbers((prev) => !prev)
                        }}></input>
                        <span className="passgen-option-text">include numbers</span>
                    </label>
                    <label className="passgen-option">
                        <input className="passgen-checkbox" type='checkbox' checked ={characters} onChange={() => {
                            setCharacters((prevs) => !prevs)
                        }}>
                        </input>
                        <span className="passgen-option-text">include symbols</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Passgen