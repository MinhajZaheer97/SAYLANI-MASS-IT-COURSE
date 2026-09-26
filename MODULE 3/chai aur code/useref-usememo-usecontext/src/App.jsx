import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import Searchbar from "./components/Searchbar/Searchbar"

const App = () => {
  return(
    <>
      <Navbar/>
      <Searchbar/>
      <Products/>
    </>
  )
}

export default App