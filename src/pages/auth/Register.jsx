import { useState } from 'react'
import { apiUrl } from '@api/api'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import useAuth from '@hooks/useAuth'

import { refreshToken } from '@api/api'

export const Register = () => {
  // set page title
  document.title = 'Register Page'

  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from === '/login' ? '/' : location.state?.from || '/'

  const [clicked, setClicked] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${apiUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    })
    const data = await response.json()
    if (response.status === 200) {
      const tokenResponse = await refreshToken(data.token)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
      setAuth(tokenResponse)
      navigate(from, { replace: true })
    } else {
      setError(true)
    }
  }

  return (
    <section className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <h1 className='mb-4 text-5xl font-semibold text-center'>
        <span
          className={`inline-block text-red-500 transition-all duration-500 ease-out origin-center transform cursor-default hover:rotate-45 ${
            clicked ? 'translate-x-20' : ''
          }`}
          onClick={() => setClicked(!clicked)}
        >
          R
        </span>
        <span
          className={`inline-block transition-all duration-500 ease-out origin-left transform cursor-default ${
            clicked ? 'translate-x-[280px] translate-y-16 rotate-90 text-black' : ''
          }`}
        >
          egister
        </span>
      </h1>
      <form className='w-full max-w-xl'>
        <div className='flex flex-row items-center gap-1 mt-4 mb-6'>
          <label htmlFor='firsName' className='block mb-2 font-medium text-gray-600 text-md text-nowrap'>
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            id='firsName'
            name='firsName'
            autoComplete='off'
            required
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          <label htmlFor='lastName' className='block mb-2 font-medium text-gray-600 text-md text-nowrap'>
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='email'
            id='lastName'
            name='lastName'
            autoComplete='off'
            required
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-6'></div>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-600'>
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            required
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-600'>
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            id='password'
            name='password'
            autoComplete='off'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
          {error && <p className='p-2 mt-2 text-sm font-bold text-red-500'>{error}</p>}
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
        >
          Register
        </button>
      </form>
      <Link className='inline-block mt-4 text-sm' to='/login'>
        <span className='ml-2 text-blue-500 underline '>Login</span>
      </Link>
    </section>
  )
}
