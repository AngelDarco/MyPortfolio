import './Contact.scss';
import { MdAlternateEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram, FaFileDownload } from 'react-icons/fa';
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
                            : <span className='message'>Sorry I don't use this social network</span>
                        )
                            }
                <h1>Contact</h1>
                <div className="icons">
                    <MdAlternateEmail className='avalible' onClick={()=>handlerIcons({e:true,content:'angel92-eme@hotmail.com'})}/>
                    <BsLinkedin className='avalible' onClick={()=>handlerIcons({e:true,content:'https://www.linkedin.com/in/angeldarco/'})}/>
                    <AiFillGithub className='avalible'onClick={()=>handlerIcons({e:true,content:'https://github.com/AngelDarco/'})}/>
                    <SiGmail className='avalible' onClick={()=>handlerIcons({e:true,content:'angelxcrema@gmail.com'})}/>
                    <FaFacebookF className='notAvalible' onClick={()=>handlerIcons({e:false,content:''})}/>
                    <FaTwitter className= 'notAvalible' onClick={()=>handlerIcons({e:false,content:''})}/>
                    <FaInstagram className='notAvalible' onClick={()=>handlerIcons({e:false,content:''})}/>
                    <abbr title="Download Resume">
                    <FaFileDownload className='avalible' onClick={()=> window.open('https://firebasestorage.googleapis.com/v0/b/darcobbdd.appspot.com/o/Pdf%2FDarcoResume.pdf?alt=media&token=4b11663f-f0c5-4c8c-8c93-b191482ba63d','_blank')}/>
                    </abbr>
                </div>
            </div>
    </div>
    )
}
export default Contact;