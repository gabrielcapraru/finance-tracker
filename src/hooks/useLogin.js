import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState('')
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const login = (email, password) => {
    setError(null)
    setIsPending(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //dispatch login action
        dispatch({ type: 'LOGIN', payload: res.user })

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

    setIsPending(false)
    setError(null)
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, login }
}
