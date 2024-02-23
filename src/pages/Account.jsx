import useAuth from '@hooks/useAuth'

export const Account = () => {
  const { auth } = useAuth()
  console.log(auth)

  return (
    <div className='flex flex-row justify-center mt-2'>
      <div>
        User Info
        <h1>Account</h1>
        <p>Account page</p>
        <p>{auth?.user?.email}</p>
      </div>
      <div>
        {auth?.user?.books?.map((book) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

