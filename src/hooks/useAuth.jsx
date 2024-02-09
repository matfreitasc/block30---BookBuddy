import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthWrapper({ children }) {
  const [user, setUser] = useState(null)

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthWrapper

// PropTypes

AuthWrapper.propTypes = {
  children: PropTypes.node,
}
