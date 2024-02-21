import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '@hooks/useAuth'

const RequireAuth = () => {
  const { user } = useAuth()
  const location = useLocation()(user?.user ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} />)
}
export default RequireAuth