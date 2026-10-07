import { useRef } from 'react'
import { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { addTodo } from './features/todoSlice'

const App = () => {
    const [AddTodoBtn] = useState("add todo")
    const todos = useSelector((state)=> state.todos.todos)
    const ref = useRef()
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(
            {
            title : ref.current.value,
            status: "false"
            }
        ))
        ref.current.value = ""
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={ref} placeholder='enter' />
            <button type='submit'>{AddTodoBtn}</button>
        </form>

        <br />
        <br />

        <ul>
            {
                todos.map((todo)=>{
                    return <li key={todo.id}>
                        {todo.title}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default App