import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import "../StyleSheet/Game.css";

const Game = () => {


//   const Interval= () =>setInterval(function(){
//     setTimeout(function(){
//         document.getElementById("dot").innerHTML="!"
//      },500);
//    setTimeout(function(){
//         document.getElementById("dot").innerHTML="!!"
//      },2000);
//    setTimeout(function(){
//          document.getElementById("dot").innerHTML="!!!"
//      },3000);
// },5500)

// Written-part  




  return (
    <div className='containerGame'>
      <div className="layout-game-container">
      <div className="left-arrow">
                    <Link to="/" className='back-btn-link'>
                          <button className='backbtn'>BACK</button>
                       </Link>
              </div>
              <div className="about-game-writen-container">
                <div className="about-game-written-container-mini">
                <h1 className='happy-halloween-heading'>Happy Halloween!</h1>
                <div className="about-game-written-part"  >
                <Typewriter
                   onInit={(typewriter) => {
                   typewriter.typeString('Welcome to the Happy Halloween game. This is a game of guessing where you\'ve to choose a name of a spirit from a given name list and all the spirits will guess your chosen words by asking questions from you, if they guess right, they\'ll win and you\'ll lose or if they wrong, they will lose and you\'ll win............ and do you know? They never lose 💀 ')
                                  // .pauseFor(2500)
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