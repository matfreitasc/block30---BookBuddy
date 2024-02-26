import { Link, useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex items-center justify-center flex-grow min-h-screen bg-gray-50'>
      <div className='p-8 text-center bg-white rounded-lg shadow-xl'>
        <h1 className='mb-4 text-4xl font-bold'>404</h1>
        <p className='text-gray-600'>Oops! The page you are looking for could not be found.</p>
        <Link
          to='/'
          className='inline-block px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600'
        >
          Go back to Home{' '}
        </Link>
      </div>
    </div>
  )
}
