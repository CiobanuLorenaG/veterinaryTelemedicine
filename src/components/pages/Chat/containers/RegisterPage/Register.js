import React, { useState } from 'react'
import Layout from '../../components/Layout/layout'
import Card from '../../components/UI/Card'
import { signup } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import './Register.css'

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const registerUser = (e) => {
    e.preventDefault()

    const user = {
      firstName,
      lastName,
      email,
      password,
    }

    dispatch(signup(user))
  }

  if (auth.authenticated) {
    return <Navigate to={`/chatapp`} />
  }

  return (
    <Layout>
      <div className="registerContainer-chatapp">
        <Card>
          <form className="form-chatapp" onSubmit={registerUser}>
            <h3 className="title-signup-chatapp">Sign up</h3>
            <div className='form-register-chatapp'>
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />

              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />

              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div>
                <button>Sign up</button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  )
}

export default RegisterPage
