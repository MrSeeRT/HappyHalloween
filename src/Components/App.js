import React  from 'react'
import Home from '../Home';
import Play from './Play';
import Game from './Game';
import About from './About';
import ReadMe from '../Pages/ReadMe';
import Intro_play from '../Pages/Intro_play';
import Question_1 from '../Pages/Question_1';
import Result from '../Pages/Result';
import Results from '../Pages/Results';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// const Home= lazy(()=>{import( '../Home')})
// const Play= lazy(()=>{import('./Play')})
// const Game= lazy(()=>{import(  './Game')})
// const About= lazy(()=>{import( './About')})
// const ReadMe= lazy(()=>{import( '../Pages/ReadMe')})



const App = () => {
  return (
    <>
   <Router>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/play' element={<Play />} />
          <Route path='/about-game' element={<Game />} />
           <Route path='/about-author' element={<About />} />
           <Route path='/about-author/read-me'  element={<ReadMe />}/> 
           <Route path='/play/intro' element={<Intro_play />} />
           <Route path='/play/question_1' element={<Question_1 />} />
           <Route path='/result' element={<Result />} />
           <Route path='/results' element={<Results />} />
        </Routes>
    </Router>
  </>
  )
  }

export default App