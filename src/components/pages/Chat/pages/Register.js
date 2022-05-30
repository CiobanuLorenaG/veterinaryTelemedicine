import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../../firebase'
import { setDoc, doc, Timestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import NavbarChat from '../Navbar'
import FooterNavBar from '../../FooterNavBar'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  })

  const history = useNavigate()

  const { name, email, password, error, loading } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setData({ ...data, error: null, loading: true })
    if (!name || !email || !password) {
      setData({ ...data, error: 'All fields are required' })
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      })
      setData({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
      })
      history('/services/chat')
    } catch (err) {
      setData({ ...data, error: err.message, loading: false })
    }
  }
  return (
    <section className="container-login-chat">
      <NavbarChat />
      <div className="content-login-chat">
        <h3 className="txt-container-login-chat">Create An Account</h3>
        <form className="form-login-chat" onSubmit={handleSubmit}>
          <div className="input_container_form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="input_container_form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input_container_form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {error ? <p className="error-login">{error}</p> : null}
          <div className="btn_container">
            <button className="btn-login" disabled={loading}>
              {loading ? 'Creating ...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      <FooterNavBar />
    </section>
  )
}

export default Register
