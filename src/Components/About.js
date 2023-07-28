import React from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheet/aboutAuthor.css"

const About = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="About-author-bg">
        <div className="layout">

            <div className="rain-container">

               <div className="rain-drop-big-1"></div>
            <div className="rain-drop-big-3"></div>
            <div className="rain-drop-big-4"></div>
            <div className="rain-drop-big-5"></div>
            <div className="rain-drop-big-6"></div>
            <div className="rain-drop-big-8"></div>
            <div className="rain-drop-big-10"></div>
            <div className="rain-drop-big-12"></div>
            <div className="rain-drop-big-13"></div>
            <div className="rain-drop-big-14"></div>
            <div className="rain-drop-small-1"></div>
            <div className="rain-drop-small-4"></div>
            </div>

               <div className="left-arrow">
                    <Link to="/" className='back-btn-link'>
                          <button className='backbtn'>Back</button>
                       </Link>
              </div>

              <div className="main-content">
                
                 <Link to="/about-author/read-me" className='read-me-link'>
                 <button className='read-me-btn'>READ ME</button>
                 </Link>

              </div>

      </div>
      </div>
    </>
  )
}

export default About