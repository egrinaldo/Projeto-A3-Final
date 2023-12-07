import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './app/context/AuthContext'
import './index.css'
import { Router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <Router />
            <Toaster />
        </AuthProvider>
    </React.StrictMode>,
)
