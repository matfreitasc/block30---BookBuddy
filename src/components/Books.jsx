import { Link, useLoaderData } from 'react-router-dom'

const Books = () => {
  const { books } = useLoaderData()
  return (
    <>
      {books.length ? (
        <div className='grid grid-cols-6 gap-3 p-2'>
          {books.map((book) => {
            return (
              <div key={book.id} className='card'>
                <h2 className='title'>{book.title}</h2>
                <img src={book.coverimage} alt={book.title} className='img' />
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Books
