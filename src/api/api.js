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

export { fetchBooks, fetchBook, url as apiUrl }
