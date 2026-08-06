import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <Navbar userName="adam" item1="games" item2="clothings" item3="cards"/>
      <div className="h-dvh flex justify-center items-center ">
        <p className='bg-black text-white rounded-xl p-4' >tailwindcss</p>
      </div>
    </>
  )
}

export default App
