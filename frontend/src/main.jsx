import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { Router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <Toaster />
  </React.StrictMode>,
)
