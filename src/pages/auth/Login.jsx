import { useState } from 'react'
import { login } from '@api/api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [clicked, setClicked] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
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
          {error && <p className='text-red-500 text-sm mt-2 p-2 font-bold'>Invalid email or password</p>}
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
        >
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
