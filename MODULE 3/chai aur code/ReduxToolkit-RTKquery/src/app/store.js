import { configureStore } from '@reduxjs/toolkit'
import todoreducers from "../features/todoSlice"

export const store = configureStore({
  reducer: {
    todos: todoreducers,
  },
})