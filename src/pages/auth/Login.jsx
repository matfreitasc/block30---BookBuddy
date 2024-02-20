const Login = () => {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <h1 className='mb-4 text-5xl font-semibold text-center'>
        Lo<span className='transform inline-block hover:ml-5 hover:rotate-45 text-red-500 transition-all'>g</span>in
      </h1>
      <form className='w-full max-w-sm'>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-600'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
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
