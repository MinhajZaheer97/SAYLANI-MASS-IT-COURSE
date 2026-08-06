import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {List,User} from './list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List name = 'minhaj' age = {16} />
    {/* <Data/> */}
  </StrictMode>,
)
