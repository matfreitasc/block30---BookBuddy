import useAuth from '@hooks/useAuth'
import { deleteReservation } from '@api/api'
import { useEffect, useState } from 'react'
import { reservations } from '@/api/api'

export const Account = () => {
  const { auth, setAuth } = useAuth()
  const [notifications, setNotifications] = useState([])

  const handleDelete = async (id, book) => {
    const deletedReservation = await deleteReservation({ token: auth.token, id })
    console.log(deletedReservation)
    setNotifications([...notifications, { id: deletedReservation.id, title: book }])
    const fetchNewReservations = await reservations(auth.token)
    setAuth({ ...auth, user: { ...auth.user, books: fetchNewReservations.reservation } })
  }

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsData = await reservations(auth.token)
      setAuth({ ...auth, user: { ...auth.user, books: reservationsData.reservation } })
    }
    fetchReservations()
  }, [])

  useEffect(() => {
    if (notifications.length === 0) return
    const timer = setTimeout(() => {
      setNotifications([])
    }, 5000)
    return () => clearTimeout(timer)
  }, [notifications])

  return (
    <div className='relative flex flex-row justify-between p-2'>
      {notifications &&
        notifications.map((notification) => (
          <div
            key={notification.id}
            className='absolute z-50 max-w-xs border border-gray-200 shadow-lg bg-slate-600 right-4 rounded-xl top-4'
            role='alert'
          >
            <div className='flex p-4'>
              <div className='flex-shrink-0'>
                <svg
                  className='flex-shrink-0 size-4 text-blue-500 mt-0.5'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                </svg>
              </div>
              <div className='ms-3'>
                <p className='text-sm text-white '>{notification.title} has been returned</p>
              </div>
            </div>
          </div>
        ))}

      <div className='w-[50%] h-[calc(100vh-100px)] bg-red-300 flex flex-col'>
        <h1>Account</h1>
        <p>{`${auth?.user?.firstname} ${auth?.user?.lastname}`}</p>
        <p>{auth?.user?.email}</p>
      </div>
      <div className='w-[50%] bg-red-900'>
        {auth?.user?.books?.map((book) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <button
              onClick={() => {
                handleDelete(book.id, book.title)
              }}
            >
              Return Book
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
