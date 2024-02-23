import { Link, Outlet } from 'react-router-dom'
import '@/App.css'

function App() {
  return (
    <>
      <nav className='flex flex-row items-center justify-between px-4 py-2 text-white bg-slate-600'>
        <img src='favicon.ico' alt='logo' />
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
            placeholder='Search'
          />
        </div>
        <ul className='flex flex-row gap-4'>
          <li className='px-4 py-2 rounded-md hover:bg-slate-800'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 py-2 rounded-md hover:bg-slate-800'>
            <Link to='account'>Account</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
