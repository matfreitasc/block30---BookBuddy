import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { RouterProvider } from 'react-router-dom'
import router from '@routes/router'
import { AuthProvider } from '@context/AuthProvider'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (import.meta.env.PROD === true) {
  disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
