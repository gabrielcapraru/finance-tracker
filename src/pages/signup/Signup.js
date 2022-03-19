import { useState } from 'react'

//styles
import styles from './Signup.module.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(email, password, name)
  }

  return (
    <form className={styles['signup-form']} onSubmit={submitHandler}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <button className='btn'>Sign up</button>
    </form>
  )
}

export default Signup
