import { useLoaderData } from 'react-router-dom'
// import useAuth from '@hooks/useAuth'
// import { reserveBook } from '@api/api'

export const Book = () => {
  const { book } = useLoaderData()
  // const { auth } = useAuth()

  return (
    <div className='flex flex-row items-center justify-around h-screen p-10'>
      <img src={book.coverimage} alt='' className='bookCard' />
      <div className='w-full h-full max-w-xl'>
        <div className='flex flex-col items-start justify-center h-full gap-3'>
          <h1 className='text-3xl font-bold '>Title: {book.title}</h1>
          <p className=''>Description: {book.description}</p>
          <p className=''>Author: {book.author}</p>
          {book.available ? (
            <button className='px-4 py-2 text-white bg-blue-500 rounded-md'>Borrow Book</button>
          ) : (
            <button className='px-4 py-2 text-white bg-red-500 rounded-md'>Return Book</button>
          )}
        </div>
      </div>
    </div>
  )
}


