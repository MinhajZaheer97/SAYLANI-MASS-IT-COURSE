import React from 'react'
import './Navbar.css'

function Navbar() {
    const btns = ['red', 'blue', 'white', 'purple', 'grey']
    return (
        <div className="flex flex-row justify-center items-center absolute bottom-0 left-0 w-full h-20 bg-gray-200">
            {
                btns.map((btn , index) => (
                    <button className='btn' key={index} onClick={Bgchanger}>{btn}</button>
                ))
            }
        </div>
    )

}

function Bgchanger(e){
    e.target.classList.add("bg-green-500")
    console.log("clicked");
    
}

export default Navbar