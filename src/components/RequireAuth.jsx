import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const location = useLocation()

  return token ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} replace />
}
export default RequireAuth
