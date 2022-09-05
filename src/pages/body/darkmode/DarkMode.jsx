import './DarkMode.scss';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { useState } from 'react';

const DarkMode = ()=>{
    const [ darkMode, setDarkMode ] = useState(false)
    const handlerDarkMode = (e)=>{
        // if(e.target.classList.contains('light')){
            setDarkMode(!darkMode)
            if(!darkMode){
                document.documentElement.style.setProperty('--primary-color', '#303131');
                document.documentElement.style.setProperty('--secondary-color', '#000');
                document.documentElement.style.setProperty('--text-color', '#fff');
            }else{
                document.documentElement.style.setProperty('--primary-color', '#e0dede');
                document.documentElement.style.setProperty('--secondary-color', '#fff');
                document.documentElement.style.setProperty('--text-color', '#000');
            }
        
    }
    return(
        <div className="containerDarkMode" >
            <MdDarkMode className={darkMode && 'dark'} onClick={handlerDarkMode}/>
            <MdOutlineWbSunny className={!darkMode &&'light'} onClick={handlerDarkMode}/>
        </div>
    )
}
export default DarkMode;