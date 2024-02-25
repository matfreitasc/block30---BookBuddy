import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem('token')) || {
      token: null,
      user: null,
    }
  )

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext



AuthProvider.propTypes = {
  children: PropTypes.node,
}
