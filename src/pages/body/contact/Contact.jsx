import './Contact.scss';
import { MdAlternateEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';


const Contact = ()=>{
    const [ message, setMessage ] = useState(false);
    const [ showMessage, setShowMessage ] = useState(false);

    const handlerIcons = ({e,content})=>{
        setShowMessage(true);
        e ? (navigator.clipboard.writeText(content)   
        ,setMessage(true))
        : (navigator.clipboard.writeText(content),setMessage(false))
        setTimeout(() => {
            setShowMessage(false)
        }, 3000);
    }

    return(
        <div className="containerContact" id='contact'>
            <div className="body">
                {
                    showMessage && (
                    message ? <span className='message'>Copied</span>
                            : <span className='message'>Sorry I don't use this red</span>
                        )
                            }
                <h1>Contact</h1>
                <div className="icons">
                    <MdAlternateEmail onClick={()=>handlerIcons({e:true,content:'angel92-eme@hotmail.com'})}/>
                    <AiFillGithub onClick={()=>handlerIcons({e:true,content:'@AngelDarco'})}/>
                    <SiGmail onClick={()=>handlerIcons({e:true,content:'angelxcrema@gmail.com'})}/>
                    <FaFacebookF onClick={()=>handlerIcons({e:false,content:''})}/>
                    <FaTwitter onClick={()=>handlerIcons({e:false,content:''})}/>
                    <FaInstagram onClick={()=>handlerIcons({e:false,content:''})}/>
                </div>
            </div>
        </div>
    )
}
export default Contact;