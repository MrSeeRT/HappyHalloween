import React from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheet/Readme.css"
import picture from '../1052gravecopy.png';

const ReadMe = () => {
  return (
    <>
    <div className="readme-container">
        <div className="readme-layout">
            <div className="photo-section">
              <img src={picture}  alt="unavailable" className='grave-picture ' />
            </div>
                <Link  to="/about-author" className='btn-section-link'>
                <button className='btn-section-button'>Back</button>
                </Link>
        </div>
    </div>

    </>
  )
}

export default ReadMe