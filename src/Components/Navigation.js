import React from 'react'
import "../StyleSheet/Navigation.css"

const Navigation = () => {
  return (
    <div>
        <div className="navigation">
        <div className="arrow-left">
        <i class="fa-thin fa-arrow-left"></i>
        </div>
        <div className="arrow-right">
        <i class="fa-solid fa-arrow-right"></i>       
        </div>
        </div>
    </div>
  )
}

export default Navigation