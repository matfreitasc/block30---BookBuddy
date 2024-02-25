import { useState } from 'react'
import { apiUrl } from '@api/api'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import useAuth from '@hooks/useAuth'

import { refreshToken } from '@api/api'

export const Login = () => {
  // set page title
  document.title = 'Login Page'

  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const [clicked, setClicked] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
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
        Lo
        <span
          className={
            `transform inline-block duration-500 ease-out cursor-default origin-center ${
              clicked ? 'hover:translate-x-16 hover:-rotate-45' : 'hover:ml-4'
            } hover:rotate-45 text-red-500 transition-all ` + (clicked ? ' translate-x-16 -ml-7 ' : '')
          }
          onClick={() => setClicked(!clicked)}
        >
          g
        </span>
        in
      </h1>
      <form className='w-full max-w-sm'>
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
          {error && <p className='p-2 mt-2 text-sm font-bold text-red-500'>Invalid email or password</p>}
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
        >
          Login
        </button>
      </form>
      <Link className='inline-block mt-4 text-sm' to='/register'>
        No Account?
        <span className='ml-2 text-blue-500 underline '>Create One</span>
      </Link>
    </section>
  )
}

