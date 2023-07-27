import React from 'react'
import { Link } from 'react-router-dom';
import  '../StyleSheet/Intro-play.css';

const intro_playGame = () => {
  return (
    <>
    <div className="main-block">
      <div className="black-layer">
        <header className='header'>
        <Link to="/play" className="btn_ofQuestions backbtn_ofIntroPlay">
               Back
              </Link>
        </header>
        <div className="sub-main-block">
      <h1 className="welcome-heading">Welcome {sessionStorage.getItem("name")} to Happy Halloween!</h1>
      <div className="sub-heading-para">
        Please choose a name from following ghost names:
      </div>
      <ul className='ghost_names'>
        <li>Banshee</li>
        <li>Demon</li>
        <li>Shade</li>
        <li>Raiju</li>
        <li>Yokai</li>
        <li>Phantom</li>
        <li>Hantu</li>
        <li>Jinn</li>
        <li>Onryo</li>
        <li>Revenant</li>
      </ul>
      </div>
      <footer className='footer'>
      
      <Link to="/play/question_1" className="btn_ofQuestions nextbtn_ofIntroPlay">
               Next
              </Link>
      </footer>
      </div>
    </div>
    </>
  )
}

export default intro_playGame