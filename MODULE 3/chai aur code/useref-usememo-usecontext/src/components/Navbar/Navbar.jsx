import { useState } from "react"

const Navbar = ({ setShowCart , showCart}) => {
  let [CartText , setCartText] = useState("Cart")
  return (
    <div className='flex items-center justify-between bg-slate-800 px-4 py-3 text-white'>
        <p className='text-lg font-semibold'>Web.store</p>
        <button
          onClick={() => {
            setShowCart(!showCart)
            showCart ? setCartText("Cart") : setCartText("Products")
          }}
          className='rounded bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700'
        >
          {CartText}
        </button>
    </div>
  )
}

export default Navbar