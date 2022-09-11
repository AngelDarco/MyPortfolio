import './Contact.scss';
import { MdAlternateEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Contact = ()=>{
    return(
        <div className="containerContact" id='contact'>
            <div className="body">
                <h1>Contact</h1>
                <div className="icons">
                    <MdAlternateEmail/>
                    <AiFillGithub/>
                    <SiGmail/>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    )
}
export default Contact;