import React from 'react'
import DemoGif from '../../images/demo.mp4'
import { withRouter } from 'react-router-dom'
import './demoPage.css'

const DemoPage = ({ history }) => {
  const handleClick = () => {
    history.push('/Login')
  }
  return (
    <div>
      <div className="gifBox">
        <video loop muted autoPlay preload="none" alt="SpotiFound-Gif" className="gif">
          <source src={DemoGif} type="video/mp4" />
        </video>
      </div>
      <div className="loginContainer">
        <button onClick={handleClick} className="loginButton">
          Login
        </button>
      </div>
    </div>
  )
}

export default withRouter(DemoPage)
