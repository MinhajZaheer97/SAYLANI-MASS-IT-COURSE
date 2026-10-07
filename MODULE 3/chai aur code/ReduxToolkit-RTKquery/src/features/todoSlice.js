import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
        id :nanoid(),
        title : "hello",
        status : "completed"
    }
   ],
};

const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state ,action)=>{
            const newTodo = {
                id : nanoid(),
                title : action.payload.title,
                status : action.payload.status
            }
            state.todos.push(newTodo)
        }
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer