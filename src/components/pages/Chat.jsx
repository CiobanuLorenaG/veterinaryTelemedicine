import React, { useRef, useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import '../stylePages/Chat.css'
import FooterNav from '../pages/FooterNavBar'
import { async } from '@firebase/util'
import { useAuth } from './Login/contexts/AuthContext'
import axios from 'axios'
import { use } from 'bcrypt/promises'

function Chat() {
  const history = useNavigate()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  console.log(user)

  const handleLogout = async () => {
    await auth.signOut()
    history('/login')
  }
  useEffect(() => {
    if (!user) {
      history('/login')
      return
    }
    axios
      .get('https://api/chatengine.ion/users/me', {
        headers: {
          'project-id': 'cc21fcb6-61f1-43e1-8f0f-2281a4b9c86f',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        let formData = new FormData()
        formData.append('email', user.email)
        formData.append('username', user.DislayName)
        formData.append('secret', user.uid)
      })
  }, [user, history])

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">PetCare Chat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectId="cc21fcb6-61f1-43e1-8f0f-2281a4b9c86f"
        userName="ciobanuLorenaG"
        userSecret="Ci17*60"
      />
      <FooterNav />
    </div>
  )
}

export default Chat
