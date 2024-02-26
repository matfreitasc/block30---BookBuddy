import { Link, useSearchParams } from 'react-router-dom'
import useAuth from '@hooks/useAuth'

const Navbar = () => {
  const { auth } = useAuth()
  let [setSearchParams] = useSearchParams()

  return (
    <nav className='sticky top-0 z-10 flex flex-row items-center justify-between px-4 py-2 text-white bg-slate-600'>
      <Link to='/'>
        <img src='/favicon.ico' alt='logo' />
      </Link>
      <div className=''>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='w-[400px] p-2 px-4 text-black rounded-md placeholder:text-gray-500 focus:outline-none
            focus:ring-4 focus:border-blue-500'
          type='search'
          name='search'
          autoComplete='off'
          id='search'
          onChange={(e) => setSearchParams({ search: e.target.value.toLowerCase() })}
          placeholder='Search'
        />
      </div>
      <ul className='flex flex-row gap-4'>
        <li className='px-4 py-2 rounded-md hover:bg-slate-800'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 py-2 rounded-md hover:bg-slate-800'>
          {auth.user ? <Link to='account'>Account</Link> : <Link to='login'>Login</Link>}
        </li>
        <li>
          {auth.user ? (
            <button
              className='px-4 py-2 text-white bg-red-500 rounded-md'
              onClick={() => {
                localStorage.removeItem('token')
                window.location.href = '/'
              }}
            >
              Logout
            </button>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
