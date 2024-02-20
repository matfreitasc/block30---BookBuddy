const url = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/'

const fetchBook = async ({ params }) => {
  try {
    const res = await fetch(`${url}books/${params.id}`, {
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

const updateBook = async ({ params }) => {
  try {
    const res = await fetch(`${url}books/${params.id}`, {
      method: 'PUT',
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

const fetchBooks = async () => {
  try {
    const res = await fetch(`${url}books`, {
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

const login = async ({ email, password }) => {
  fetch(url + 'users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      throw res
    })
    .then((user) => {
      return user
    })
    .catch((error) => {
      return error
    })
}
const signup = async ({ email, password }) => {
  fetch(url + 'users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then((user) => {
      return user
    })
    .catch((error) => {
      return error
    })
}

const refreshToken = async ({ token }) => {
  try {
    const res = await fetch(`${url}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${token}`,
      },
    })
    const user = await res.json()
    console.log(user)
    return user
  } catch (error) {
    console.log(error)
  }
}

export { fetchBooks, fetchBook, url as apiUrl, login, signup, refreshToken, updateBook }
