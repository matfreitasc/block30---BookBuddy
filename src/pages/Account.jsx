import useAuth from '@hooks/useAuth'

const Account = () => {
  const { auth } = useAuth()

  return (
    <div className='flex flex-row justify-center mt-2'>
      <div>
        User Info
        <h1>Account</h1>
        <p>Account page</p>
        <p>{auth?.user?.email}</p>
      </div>
      <div>user books</div>
    </div>
  )
}

export default Account
