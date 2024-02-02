import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { apiUrl } from '@/api/api'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthWrapper({ children }) {
	const [user, setUser] = useState(null)
	const [error, setError] = useState([])
	const [loading, setLoading] = useState(false)

	function login(email, password) {
		setLoading(true)
		fetch(apiUrl + 'users/login', {
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
				setUser(user)
				setLoading(false)
			})
			.catch((error) => {
				setError(error)
				setLoading(false)
			})
	}
	function signup(email, password) {
		setLoading(true)
		fetch(apiUrl + 'users/register', {
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
				setUser(user)
				setLoading(false)
			})
			.catch((error) => {
				setError(error)
				setLoading(false)
			})
	}
	function logout() {
		setUser(null)
	}
	function getUser() {
		fetch(apiUrl + 'users/me', {
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
				setUser(user)
			})
			.catch((error) => {
				setError(error)
			})
	}
	return (
		<AuthContext.Provider
			value={{ user, error, loading, login, signup, logout, getUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthWrapper

// PropTypes

AuthWrapper.propTypes = {
	children: PropTypes.node,
}
