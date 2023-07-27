import React  from 'react'
import { Link } from 'react-router-dom';
import "../StyleSheet/Results.css"


const ghostsName = {
  "12" : "Revenant",
  "13" : "Onryo",
  "14" : "Jinn",
  "15" : "Hantu",
  "23" : "Phantom",
  "24" : "Yokai",
  "25" : "Raiju",
  "34" : "Shade",
  "35" : "Demon",
  "45" : "Banshee",
}
const Result = () => {
    const key = sessionStorage.getItem("number")
    const decisionYesNo = sessionStorage.getItem("resultdecision")
   
  return (
    <>
     <div className="main-block-result">
      <div className="black-layer-result extra-black-layer-result">
        <div className="sub-main-block-result extra-sub-main-block-result">
          <h2 className="thisisquestion-result" >
          { decisionYesNo==="no" ? `Then why you choose ${ghostsName[key]}, if you don't know about it ? ` : `Your choosen word is ${ghostsName[key]}`}
          </h2>
          <div className="submission-result">
            <Link to="/" className="submission-result-link" onClick={()=>{sessionStorage.clear()}}><span>Return to Home</span></Link>
            <Link  to="/play/intro"  className="submission-result-link"><span>Play Again</span></Link>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Result