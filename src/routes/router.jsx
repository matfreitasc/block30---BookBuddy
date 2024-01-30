import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../pages/error-page'
import { fetchBooks } from '../api/api'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: fetchBooks,
	},
])

export default router
