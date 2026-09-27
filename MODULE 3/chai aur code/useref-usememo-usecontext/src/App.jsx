import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import Searchbar from "./components/Searchbar/Searchbar"
import { useState } from "react"

const App = () => {
  const [showCart, setShowCart] = useState(false)

  return(
    <>
      <Navbar setShowCart={setShowCart} showCart={showCart}/>
      <Searchbar/>
      {showCart ? <Cart/>  : <Products/>}
    </>
  )
}

export default App