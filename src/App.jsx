import { Link, Outlet, useSearchParams } from 'react-router-dom'
import '@/App.css'
import useAuth from '@hooks/useAuth'

function App() {
  const { auth } = useAuth()
  let [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)

  return (
    <>
      <nav className='flex flex-row items-center justify-between px-4 py-2 text-white bg-slate-600'>
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
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
