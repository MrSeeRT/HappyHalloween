import React from "react";
import "../StyleSheet/play-game.css";
import { Link } from "react-router-dom";

const Play = () => {



  return (
    <>
      <div className="play-container">
        <div className="play-container-layoff">
          {/* Middle-Container  */}
          <div className="single-one-container">
            <div className="user-data-collection-heading">
              <h1>Please fill below details..</h1>
              </div>
              <div className="user-data-input-name">
                <span>Name: </span> <input type="text" placeholder="Happy Halloween!" id="inputusername" />
              </div>
              <div className="user-data-input-que">
                <h3>Do you believe in ghosts? </h3> 
                <div className="radio-btns">
                <input type="radio" name="selection" value="yes" /><span>Yes </span>
                <input type="radio" name="selection" value="no" /><span>No</span>
                </div>
              </div>
              
            


            {/* Buttons for mobile view */}
            <div className="mob-user-data-collections-buttons">
              <Link to="/" className="user-data-collecton-back-btn">
                Back
              </Link>
              <Link className="user-data-collecton-next-btn">
                Next
              </Link>
            </div>
          </div>
          {/* Buttons for web view */}
          <div className="web-user-data-collections-buttons">
              <Link to="/" className="user-data-collection-back-link">
                Back
              </Link>
              <Link to="/play/intro" className="user-data-collection-next-link nextbtn" >
                Next
              </Link>
            </div>          
        </div>
      </div>
    </>
  );
};

export default Play;

const userName= document.querySelector(".nextbtn");
console.log("hihi")
// userName.addEventListener(
//   "click",
//   function(){
//     let nameIs =document.getElementById("inputusername");
//     console.log(nameIs)
//   }
// )