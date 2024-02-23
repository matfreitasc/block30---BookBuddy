const url = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

const fetchBook = async ({ params }) => {
  try {
    const res = await fetch(`${url}/books/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const book = await res.json()
    return book
  } catch (error) {
    console.log(error)
  }
}

const reserveBook = async ({ id, token, available }) => {
  try {
    const res = await fetch(`${url}/books/${id}/reserve`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ available }),
    })
    const book = await res.json()
    return book
  } catch (error) {
    console.log(error)
  }
}

const fetchBooks = async () => {
  try {
    const res = await fetch(`${url}/books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const books = await res.json()
    return books
  } catch (error) {
    console.log(error)
  }
}

const refreshToken = async (token) => {
  try {
    const res = await fetch(`${url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const user = await res.json()
    return { token, user }
  } catch (error) {
    console.log(error)
  }
}

export { fetchBooks, fetchBook, url as apiUrl, refreshToken, reserveBook }
