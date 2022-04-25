import React from 'react'
import '../../stylePages/Login.css'
import iconLogin from '../../photos/Login/iconLogin.png'

function Login(props) {
  return (
    <div className="base-container">
      <div className="content-login">
        <div className="img-login">
          <img src={iconLogin} width={'5rem'}></img>
        </div>
        <div className="header-login">Login</div>
        <div className="form-login">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username"></input>
        </div>
        <div className="form-login">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password"></input>
        </div>
        <div className="footer-login">
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
