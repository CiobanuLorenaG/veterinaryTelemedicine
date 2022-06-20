import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavbarChat from '../Navbar'
import '../style/Login.css'
import FooterNavBar from "../../FooterNavBar";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const history = useNavigate();

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history('/services/chat')
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <section className="container-login-chat">
      <NavbarChat />
      <div className="content-login-chat">
        <h3 className="txt-container-login-chat">Log into your Account</h3>
        <form className="form-login-chat" onSubmit={handleSubmit}>
          <div className="input_container_form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="user_login_email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input_container_form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="user_login_password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {error ? <p className="error-login">{error}</p> : null}
          <div className="btn_container">
            <button className="btn-login" disabled={loading} id="btn_login">
              {loading ? 'Logging in ...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
      <FooterNavBar />
    </section>
  )
};

export default Login;
