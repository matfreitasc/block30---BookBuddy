import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { RouterProvider } from 'react-router-dom'
import router from '@routes/router'
import { AuthProvider } from '@context/AuthProvider'

if (import.meta.env.PROD) {
  // inject this script into the head of the document

  const script = document.createElement('script')
  script.text = `if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
  }`
  document.head.appendChild(script)
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
