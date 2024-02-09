const url = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/'

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
function login(email, password) {
  fetch(url + 'users/login', {
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
function signup(email, password) {
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
function logout() {
  localStorage.removeItem('token')
}
function getUser() {
  fetch(url + 'users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token') || '',
    },
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

export { fetchBooks, fetchBook, url as apiUrl, login, signup, logout, getUser }
