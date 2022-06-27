import React from 'react'
import './Login.css'
import { accessUrl } from './spotify'
const Login = () => {
  return (
    <>
     <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt="" />
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
     </div>
    </>
  )
}

export default Login