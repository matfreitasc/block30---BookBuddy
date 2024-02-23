import useAuth from './useAuth'
import { refreshToken } from '@api/api'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const refresh = async () => {
    const res = await refreshToken(JSON.parse(localStorage.getItem('token')).token)
    setAuth((prev) => {
      return {
        ...prev,
        user: res.user,
        token: res.token,
      }
    })

    return res
  }

  return refresh
}

export default useRefreshToken
