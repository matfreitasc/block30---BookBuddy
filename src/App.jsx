import { useLoaderData } from 'react-router-dom'
import '@/App.css'

function App() {
  const { books } = useLoaderData()
  console.log(books)
  return (
    <>
      <h1>Books</h1>
      {books.length ? (
        <div className='flex'>
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

export default App
