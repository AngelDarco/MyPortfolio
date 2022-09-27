import { useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const GoUp = ({reference})=>{
   const [ show, setShow ] = useState(true);
   const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    const observer = new IntersectionObserver((e)=>{
        setShow(e[0].isIntersecting
        )},options)
    reference && observer.observe(reference);
    return(
        <div className="GoupContainer" style={styles.container}>
            <div style={styles.body} className="body">
           { !show && <BsArrowUpCircle onClick={()=>location.href = '#home'}/> }
            </div>
        </div>
    )
}
const styles = {
    container:{
        width:'100%',
        height:'10vh',
        position: 'sticky',
        top: '90%',
        left: '90%',
        zIndex: '200'
    },
    body:{
        borderRadius: '50%',
        color: 'var(--text-color)',
        fontSize: '2.5rem',
        padding:'0 5%'
    }
}
export default GoUp;