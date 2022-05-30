import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "./context/auth";
import { useNavigate } from "react-router-dom";
import './style/NavBarChat.css'

const Navbar = () => {
  const history = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history("/login");
  };
  return (
    <nav className="container-navbar-chat">
      <h3>
        <Link
          to="/services/chat"
          style={{ textDecoration: 'none' }}
          className="title-chat-navbar"
        >
          Chat PetCare
        </Link>
      </h3>
      <div className="content-navbar-chat">
        {user ? (
          <div className="content-navbar-chat">
            <Link
              to="/services/profile"
              style={{
                textDecoration: 'none',
                marginRight: '1rem',
              }}
              className="content-navbar-chat-profile"
            >
              Profile
            </Link>
            <button className="btn-logout" onClick={handleSignout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="content-navbar-chat">
            <Link
              to="/services/register"
              style={{ textDecoration: 'none' }}
              className="content-navbar-chat"
            >
              Register
            </Link>
            <Link
              to="/services/login"
              style={{ textDecoration: 'none' }}
              className="content-navbar-chat"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
