import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = () => {
    setError(null)
    setIsPending(true)

    signOut(auth)
      .then(() => {
        console.log('user signed out')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })

        //update state
        if (!isCancelled) {
          setIsPending(false)
          setError(null)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.log(err.message)
          setError(err.message)
          setIsPending(false)
        }
      })
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}
