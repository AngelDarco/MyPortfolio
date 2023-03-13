/* eslint-disable react/react-in-jsx-scope */
import './Main.scss';
import logo from '../../../assets/img/owner.png';
import Header from '../header/Header';
import Typewriter  from 'typewriter-effect/dist/core';
import { useEffect, useRef } from 'react';

const Main = ()=>{
    const app = useRef(null);

    useEffect(()=>{
        if(app.current !== null){
        const typewriter = new Typewriter(app.current,{
            loop:true,
            delay: 150,
        });
        typewriter
        .pauseFor(2000)
        .typeString('<span>Junior</span>')
        .deleteChars(6)
        .pauseFor(2000)
        .typeString('<span>Mid/Level</span>')
        .deleteChars(9)
        .pauseFor(2000)
        .typeString('<span>Senior</span>')
        .start();
        }
    },[app.current])

    return (
        <div className='mainContainer' id='home'>
            <Header/>
            <div className="body">
            <div className="logo">
                <img src={logo} alt="logo.gif" /> 
            </div>
                <div className="text">
                <h5></h5>
                <p>Hi, I'm Angel and I'm:</p>
                <h1>Frontend Developer</h1>
            <div ref={app}>
            </div>
                <h6></h6> 
                </div>

            </div>
        </div>
    )
}
export default Main;