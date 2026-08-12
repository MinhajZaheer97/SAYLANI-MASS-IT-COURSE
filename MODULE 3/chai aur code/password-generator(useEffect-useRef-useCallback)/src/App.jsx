import { useState , useRef} from 'react'
import './App.css'

// function App() {

//     const [length , useLength] = useState(8)
//     const [value , setValue] = useState("")
//   return (
//     <div>
//         <input type="text" value={randomPassGen} />
//     </div>
//   )
// }
// const  randomPassGen = ()=>{
//   let pass;
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//   for (let i = 1 ; i <= str.length ; i++){
//     let char = Math.floor(Math.random() * length + 1)
//     pass = str.charAt(char)
//   }

//   return setValue(pass)

// }

function App() {

    const count = useRef(0);
    const [value, setValue] = useState(0);
    const clicked = () => {
        count.current++;
        setValue(count.current);

        console.log(count.current);
    };

    return (
        <button onClick={clicked}>
            Click = {count.current} and Value = {value}
        </button>
    );
}



export default App