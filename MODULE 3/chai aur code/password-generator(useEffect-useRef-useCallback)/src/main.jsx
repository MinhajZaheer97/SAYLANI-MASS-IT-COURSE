import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App from './AppNoCallback.jsx'
import Callbackhook from './Callbackhook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />,
    {/* <Callbackhook /> */}
  </StrictMode>
)
