import React from 'react'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
    const [Color , setColor] = useState("white")
    const btns = ['red', 'blue', 'black', 'purple', 'grey' , 'cyan']
    return (
        <div className="w-full h-screen flex flex-row justify-center items-end bg-gray-200" 
        style={{backgroundColor: Color}}>

            {
                btns.map((btn , index)=>{
                    return <button key={index} className='btn' style={{backgroundColor : btn , color : "white"}} onClick={() => {
                        setColor(btn)
                    }}>{btn}</button>
                })
            }

        </div>
    )

}



export default Navbar