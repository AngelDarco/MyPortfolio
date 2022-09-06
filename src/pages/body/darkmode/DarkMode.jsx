import './DarkMode.scss';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { useEffect, useState } from 'react';

const DarkMode = ()=>{
    const local = localStorage.getItem('darkmode') || false;
    const [ darkMode, setDarkMode ] = useState(local);

    const handlerDarkMode = ()=> {
        setDarkMode(!darkMode);
        darkMode
        ? localStorage.setItem('darkmode','light')
        : localStorage.setItem('darkmode','dark')
    }
    
    if(local === 'dark'){
        document.documentElement.style.setProperty('--primary-color', '#303131');
        document.documentElement.style.setProperty('--secondary-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
    }else{
        document.documentElement.style.setProperty('--primary-color', '#e0dede');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
    }

    return(
        <div className="containerDarkMode">
            <MdDarkMode className={local === 'dark' && 'dark'} onClick={handlerDarkMode}/>
            <MdOutlineWbSunny className={local === 'light' &&'light'} onClick={handlerDarkMode}/>
        </div>
    )
}
export default DarkMode;