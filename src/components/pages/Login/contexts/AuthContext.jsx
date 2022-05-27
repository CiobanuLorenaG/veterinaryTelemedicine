import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if(user) history('/services/chat')
    })
  }, [user, history]) // dependecy list

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* if there are not loading then show the children*/}
    </AuthContext.Provider>
  )
}
