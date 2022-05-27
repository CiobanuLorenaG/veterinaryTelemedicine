import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {

 let {} = useParams()

  return (
    <div className='profile-container'>
     <div className='basic-info'>
      <h1>Username: {}</h1>
     </div>
     <div className='listOfPosts'></div>
      
    </div>
  )
}

export default Profile
