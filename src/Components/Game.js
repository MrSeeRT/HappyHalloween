import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import "../StyleSheet/Game.css";

const Game = () => {


  return (
    <div className='containerGame'>
      <div className="layout-game-container">
      <div className="left-arrow">
                    <Link to="/" className='back-btn-link'>
                          <button className='backbtn'>Back</button>
                       </Link>
              </div>
              <div className="about-game-writen-container">
                <div className="about-game-written-container-mini">
                <h1 className='happy-halloween-heading'>Happy Halloween!</h1>
                <div className="about-game-written-part"  >
                <Typewriter
                   onInit={(typewriter) => {
                   typewriter.typeString('Welcome to the Happy Halloween game. This is a game of guessing where you\'ve to choose a name of a ghost from a given name list and all the ghosts will guess your chosen word by asking questions from you, if they guess right, they\'ll win and you\'ll lose or if they wrong, they will lose and you\'ll win............ and do you know? They never lose 💀 ')
                                  .start();
                             }}
                  />
                </div>
               </div>
              </div>

      </div>

    </div>
  )
  }

export default Game