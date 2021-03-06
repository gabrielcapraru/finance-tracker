import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState('')
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //add display name to user
        updateProfile(res.user, { displayName })

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

  return { error, isPending, signup }
}
