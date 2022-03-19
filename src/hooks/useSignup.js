import { useState } from 'react'
import { auth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState('')

  const signup = async (email, password, displayName) => {}

  return { error, isPending, signup }
}
