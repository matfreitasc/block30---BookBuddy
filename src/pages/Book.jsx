import { useLoaderData } from 'react-router-dom'
import useAuth from '@hooks/useAuth'
import { reserveBook } from '@api/api'
import { useState } from 'react'

export const Book = () => {
  const { book } = useLoaderData()
  const [available, setAvailable] = useState(book.available)

  const { auth } = useAuth()

  return (
    <div className='flex flex-row items-center justify-around h-screen p-10'>
      <img src={book.coverimage} alt='' className='bookCard max-w-96' />
      <div className='w-full h-full max-w-xl'>
        <div className='flex flex-col items-start justify-center h-full gap-3'>
          <h1 className='text-3xl font-bold '>Title: {book.title}</h1>
          <p className=''>Description: {book.description}</p>
          <p className=''>Author: {book.author}</p>
          {available ? (
            <button
              className='px-4 py-2 text-white bg-blue-500 rounded-md'
              onClick={async () => {
                const updatedBook = await reserveBook({ id: book.id, token: auth.token, available: false })
                setAvailable(updatedBook.available)
              }}
            >
              Borrow Book
            </button>
          ) : (
            <span className='px-4 py-2 text-white bg-gray-400 rounded-md'>Book not available</span>
          )}
        </div>
      </div>
    </div>
  )
}
