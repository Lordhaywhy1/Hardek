import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DemoStateProvider } from './store'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><DemoStateProvider><App /></DemoStateProvider></BrowserRouter></StrictMode>)
