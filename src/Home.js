import React from 'react'
import { Link } from 'react-router-dom';
import Home_Css from './StyleSheet/Home_Css.css';

const Home = () => {
  return (
    <div className='container'>
        <div className='layer'>
        <div className="snow">
            <div className='snows-1'></div>
            <div className='snows-2'></div>
            <div className='snows-4'></div>
            <div className='snows-5'></div>
            <div className='snows-4'></div>
            <div className='snows-5'></div>
            <div className='snows-6'></div>
            <div className='snows-8'></div>
            <div className='snows-9'></div>
        </div>

        <div className="snow-2">
            <div className='snows-7'></div>
            <div className='snows-3'></div>
            <div className='snows-1'></div>
            <div className='snows-10'></div>
            <div className='snows-4'></div>
            <div className='snows-7'></div>
            <div className='snows-8'></div>
            <div className='snows-9'></div>
            <div className='snows-10'></div>
            <div className='snows-1'></div>
            <div className='snows-2'></div>
            <div className='snows-1'></div>
            <div className='snows-8'></div>
            <div className='snows-9'></div>
        </div>
        <div className="snow-3">
            <div className='twinking-1'></div>
            <div className='twinking-2'></div>
            <div className='twinking-3'></div>
            <div className='twinking-4'></div>
            <div className='twinking-2'></div>
            <div className='twinking-1'></div>
            <div className='twinking-3'></div>
            <div className='twinking-1'></div>
            <div className='twinking-4'></div>
            <div className='twinking-3'></div>
            <div className='twinking-2'></div>
            <div className='twinking-1'></div>
            <div className='twinking-3'></div>
            <div className='twinking-4'></div>
        </div>

        
            <div className="button">
            <Link to="/play" className='link-buttons'><button className="button-1" >Play</button></Link>
            <Link to="/about-game" className='link-buttons'><button className="button-1">About Game</button></Link>
                <Link to="/about-author" className='link-buttons'> <button className="button-1" >About Author</button> </Link>
            </div>
                <img src="/Photos/logoo.png" alt="Not Found"  className='logo'/>
        </div>
    </div>
  )
}

export default Home