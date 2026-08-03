import {useState} from 'react'
function App() {
        let [counter , setcounter] = useState(0)  
    return (
        <>
            <h1>counter = {counter} </h1>
            <button 
            onClick ={()=>{ 
                if(counter < 20){
                    setcounter(++counter)
                }
                }
        }
            >+</button>
            <button 
            onClick ={()=> {
                if(counter > 0){
                    setcounter(--counter)
                }
            }
        }
            >-</button>
        </>
    )
}


export default App