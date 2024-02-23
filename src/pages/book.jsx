import { useLoaderData } from 'react-router-dom'

const Book = () => {
  const { book } = useLoaderData()
  return (
    <>
      <div key={book.id} className='card'>
        <h2 className='title'>{book.title}</h2>
        <img src={book.coverimage} alt={book.description} className='img' />
      </div>
      <div>
        <p>
          <strong>Author: </strong>
          {book.author}
        </p>
        <p>
          <strong>Description: </strong>
          {book.description}
        </p>
        <p>
          <strong>Is Available: </strong>
          {book.available ? 'Available' : 'Not Available'}
        </p>
      </div>
    </>
  )
}

export default Book
