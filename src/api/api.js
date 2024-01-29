const url = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/'

const fetchBooks = async () => {
	try {
		const res = await fetch(`${url}books`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

const fetchBook = async (id) => {
	try {
		const res = await fetch(`${url}books/${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export { fetchBooks, fetchBook }