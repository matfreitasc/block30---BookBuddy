import { Link, useLoaderData, useSearchParams } from 'react-router-dom'

const Books = () => {
  const { books } = useLoaderData()
  // get params from url to filter books
  const [searchParams] = useSearchParams()
  document.title = 'Book Buddy'

  return (
    <>
      {books.length ? (
        <div className='grid justify-around grid-cols-5 gap-3 p-2 '>
          {books
            .filter((book) =>
              searchParams.get('search') ? book.title.toLowerCase().includes(searchParams.get('search')) : book
            )
            .map((book) => {
              return (
                <div key={book.id} className='card'>
                  <div className='relative max-w-sm overflow-hidden rounded shadow-lg'>
                    <Link to={`/book/${book.id}`}>
                      <img className='w-full' src={book.coverimage} alt={book.description} />
                    </Link>
                    <div className='px-6 py-4'>
                      <div className='mb-2 text-xl font-bold'>{book.title}</div>
                      <p className='text-base text-gray-700'>{book.description}</p>
                    </div>
                    <div className='px-6 pt-4 pb'>
                      <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
                        Author: {book.author}
                      </span>
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 px-4 py-2 rounded-tl-md text-gray-200 ${
                        book.available ? 'bg-green-600' : 'bg-gray-500 '
                      }`}
                    >
                      {book.available ? 'Available' : 'Reserved'}
                    </span>
                  </div>
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
