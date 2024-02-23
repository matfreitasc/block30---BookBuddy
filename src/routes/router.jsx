import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Book from '@pages/book'
import ErrorPage from '@pages/error-page'
import Account from '@pages/Account'
import { fetchBooks, fetchBook } from '@/api/api'
import Login from '@pages/auth/Login'
import RequireAuth from '@components/RequireAuth'
import PersistLogin from '@components/PersistLogin'
import Books from '@components/Books'

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
])

export default router
