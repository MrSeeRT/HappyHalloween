import React  from 'react'
import { Link } from 'react-router-dom';
import "../StyleSheet/Result.css"


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
  if(key=="12" || key==="13" || key=="14" || key==="15" || key=="23" || key==="24" || key=="25" || key==="34" || key=="35" || key==="45"){
  return (
    <>
     <div className="main-block-result">
      <div className="black-layer-result">
        <header className='header-result'>
        <Link to="/" className="btn_ofQuestions backbtn_ofResult" onClick={()=>{sessionStorage.clear()}}>
               Home
         </Link>
        </header>
        <div className="sub-main-block-result">
          <h2 className="thisisquestion-result">
          And finally.....do you know something about {ghostsName[key]} ?
          </h2>
          <div className="submission-result">
            <Link to="/results"type='submit' value="yes" className="submission-result-link" onClick={()=>{sessionStorage.setItem("resultdecision", "yes")}}><span>Yes</span></Link>
            <Link  to="/results" type='submit' value="no" className="submission-result-link" onClick={()=>{sessionStorage.setItem("resultdecision", "no")}}><span>No</span></Link>
          </div>
      </div>
      </div>
    </div>
    </>
  )
  }else{
    return(
    <>
    <div className="main-block-result">
      <div className="black-layer-result extra-black-layer-result">
        <div className="sub-main-block-result extra-sub-main-block-result">
          <h2 className="thisisquestion-result" >
          You filled wrong answers.
          </h2>
          <div className="submission-result">
            <Link to="/" className="submission-result-link"  onClick={()=>{sessionStorage.clear()}}><span>Return to Home</span></Link>
            <Link  to="/play/intro"  className="submission-result-link" onClick={()=>{sessionStorage.clear()}}><span>Play Again</span></Link>
          </div>
      </div>
      </div>
    </div>
    </>
    )
  }
}

export default Result