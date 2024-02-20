import useAuth from './useAuth'
import { refreshToken } from '@api/api'

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth()

  const refresh = async () => {
    console.log('refreshing token')
    console.log(auth)
    const res = await refreshToken(auth.token)
    console.log(res)
    if (res.status === 200) {
      setAuth((prev) => {
        console.log(JSON.stringify(prev))
        console.log(JSON.stringify(res))
        return { ...prev, token: res.token }
      })
    }
    throw res.message
  }

  return refresh
}

export default useRefreshToken
