import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

const PrivateRoute = () => {
  const location = useLocation()
  const user = useAuth()

  return user ? (
    <Navigate to='/login' state={{ from: location.pathname }} replace={true} />
  ) : (
    <Outlet />
  )
}

export default PrivateRoute
