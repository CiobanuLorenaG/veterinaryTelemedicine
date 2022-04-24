import React from 'react'
import '../stylePages/NotFound.css'
import upsetDog from '../photos/NotFoundPage/upsetDog2.png'
function NotFound() {
  return (
    <div className="header-not-found">
      <h1>Not found...</h1>
      <h5 className="hyperlinkHome">
        Don't worry, click{' '}
        <a href="/" className="hyperlink">
          here{' '}
        </a>
        to go back!
      </h5>
      <img src={upsetDog} width={'300px'}></img>
    </div>
  )
}

export default NotFound
