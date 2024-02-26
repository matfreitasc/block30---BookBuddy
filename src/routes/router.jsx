import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'


import { fetchBooks, fetchBook } from '@/api/api'

import RequireAuth from '@components/RequireAuth'
import PersistLogin from '@components/PersistLogin'
import Books from '@components/Books'

import { Login, Register, ErrorPage, Account, Book } from '@pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Books />,
        loader: fetchBooks,
        errorElement: <ErrorPage />,
      },
      {
        path: 'book/:id',
        element: <Book />,
        errorElement: <ErrorPage />,
        loader: fetchBook,
      },
      {
        element: <PersistLogin />,
        children: [
          {
            element: <RequireAuth />,
            children: [
              {
                path: 'account',
                element: <Account />,
                errorElement: <ErrorPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

export default router
