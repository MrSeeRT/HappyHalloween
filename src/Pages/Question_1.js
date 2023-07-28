import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import "../StyleSheet/question_1.css"

const questions = [{
  "question" : "Is your option present in the following options?",
  "a" : "Jinn",
  "b" : "Onryo",
  "c" : "Revenant",
  "d" : "Hantu",
  "key" : "1"
},
{
  "question" : "Do you, personally, believe you're prepared for the zombie apocalypse?",
  "a" : " ",
  "b" : " ",
  "c" : " ",
  "d" : " "
},
{
  "question" : "Is your word present in the following options?",
  "a" : "Revenant",
  "b" : "Shade",
  "c" : "Yokai",
  "d" : "Raiju",
  "key" : "2"
},
{
  "question" : "Would you ever use a Ouija board to contact spirits ?",
  "a" : " ",
  "b" : " ",
  "c" : " ",
  "d" : " "
},
{
  "question" : "Is your word present in the following options?",
  "a" : "Onryo",
  "b" : "Phantom",
  "c" : "Shade",
  "d" : "Demon",
  "key" : "3"
},
{
  "question" : "You're home alone and hear a loud THUMP upstairs. Would you go to investigate it ?",
  "a" : " ",
  "b" : " ",
  "c" : " ",
  "d" : " "
},
{
  "question" : "Is your word present in the following options?",
  "a" : "Banshee",
  "b" : "Jinn",
  "c" : "Yokai",
  "d" : "Shade",
  "key" : "4"
},
{
  "question" : "Would you say you're more a 'lover' than a 'fighter' ?",
  "a" : " ",
  "b" : " ",
  "c" : " ",
  "d" : " "
},
{"question" : "Is your word present in the following options?",
"a" : "Banshee",
"b" : "Hantu",
"c" : "Raiju",
"d" : "Demon",
"key" : "5"
}
]
const Question_1 = () => {
  const [current, setCurrent] = useState(0);
  const [ans, setAns] = useState(" ")
  useEffect(() => {
    if(ans==="yes" || ans === "no"){
      let element = document.getElementById("next-button");
      element.classList.remove("not-clickable");
      element.classList.add("btn_ofQuestions")
    }
   },[ans])

   const nextQuestion = () => {
    setCurrent(current+1);
    let element = document.getElementById("next-button");
    element.classList.remove("btn_ofQuestions");
    element.classList.add("not-clickable")
    if( ans === "yes"  && current%2==0){
    if(sessionStorage.getItem("number")== null){
      sessionStorage.setItem("number", questions[current].key)
    }else{
      let b=sessionStorage.getItem("number");
      let c=questions[current].key
      sessionStorage.setItem("number",b+c)
    }
  }
  setAns(" ");
  if(current== 8){
    window.location ="/result";
  }
   }
   if(current <=8){
  return (
    <>
   <div className="main-block-quiz">
      <div className="black-layer-quiz">
        <header className='header-quiz'>
        <Link to="/" className="btn_ofQuestions backbtn_ofIntroPlay-quiz" onClick={()=>{sessionStorage.clear()}}>
               Home
              </Link>
        </header>
        <div className="sub-main-block-quiz">
        <span >{current+1}/10</span>
          <h2 className="thisisquestion">
             { questions[current].question}
          </h2>
          <div className="options-div">
            <div className="options">{ questions[current].a}</div>
            <div className="options">{ questions[current].b}</div>
            <div className="options">{ questions[current].c}</div>
            <div className="options">{ questions[current].d}</div>
          </div>
          <div className="submission">
            <button type='submit'  className={ans === "yes" ?  'setanswer' : ' '}  onClick={() => setAns("yes")} >Yes</button>
            <button type='submit' className={ans === "no" ?  'setanswer' : ' '} onClick={() => setAns("no")} >No</button>
          </div>
      </div>

      <footer className='footer-quiz'>
      <div className=" nextbtn_ofIntroPlay-quiz not-clickable" id='next-button' onClick={nextQuestion}>
               Next
              </div>
      </footer>
      </div>
    </div> 
    </>
  ) 
   }
}

export default Question_1