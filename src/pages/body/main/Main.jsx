import './Main.scss';
import logo from '../../../assets/img/owner.png';

const Main = ()=>{
    return (
        <div className='mainContainer'>
            <div className="body">
                <div className="header">
                <ul>
                <li>Home</li>
                <li>Proyects</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
            <button>Hire Me</button>
                </div>
            <div className="logo">
                <img src={logo} alt="logo.gif" /> 
            </div>
            <div className="text">
                <h5></h5>
                <h1>Frontend Developer</h1>
                <h3>Mid/Level</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus eveniet aliquam culpa explicabo atque, incidunt tempora nihil exercitationem odit ratione in itaque, accusamus dolore voluptas, at facilis dolores voluptate.</p>
                <h6></h6>
            </div>
            </div>
        </div>
    )
}
export default Main;