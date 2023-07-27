import React, { useEffect, useState } from "react";
import "../StyleSheet/play-game.css";
import { Link } from "react-router-dom";

const Play = () => {
  var a=0;
const [Text, setText] = useState("Happy Halloween!")
  useEffect(()=>{
    if(Text!=null && Text!="Happy Halloween!" && Text!=""){
      let element=document.getElementById("nextbtn")
      element.classList.add("user-data-collection-next-link")
       a=1;
      element.classList.remove("notclickbtn")
    }
  },[Text])
const saveUsername=()=>{
  if(a==1){
    let userName = document.getElementById("inputusername").value;
console.log(userName)
sessionStorage.setItem("name",userName)
    window.location = "/play/intro"
  }else{
    alert("Please fill the details")
  }
 }
 const handleOnChange = (event) => {
  setText(event.target.value)
 }

  


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
                <span>Name: </span> <input type="text"  value={Text} placeholder="Happy Halloween!" id="inputusername" onChange={handleOnChange}  />
              </div>
              <div className="user-data-input-que">
                <h3>Do you believe in ghosts? </h3> 
                <div className="radio-btns">
                <input type="radio" name="selection" value="yes" /><span>Yes </span>
                <input type="radio" name="selection" value="no" /><span>No</span>
                </div>
              </div>
             
          </div> 
          <div className="web-user-data-collections-buttons">
              <Link to="/" className="user-data-collection-back-link">
                Back
              </Link>
              <span className="nextbtnOfPlay notclickbtn" id="nextbtn" onClick  = {saveUsername} >
                Next
              </span>
            </div>          
        </div>
      </div>
    </>
  );
};

export default Play;
