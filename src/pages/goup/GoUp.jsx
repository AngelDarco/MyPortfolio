import { useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const GoUp = ({reference})=>{
   const [ show, setShow ] = useState(true);
   const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    const observer = new IntersectionObserver((e)=>setShow(e[0].isIntersecting),options)
    reference && observer.observe(reference);
    return(
        <div className="GoupContainer" style={styles}>
            { !show && <BsArrowUpCircle onClick={()=>location.href = '#home'}/> }
        </div>
    )
}
const styles = {
    color: 'var(--text-color)',
    borderRadius: '50%',
    width: 'fit-content',
    position: 'sticky',
    top: '90%',
    left: '90%',
    fontSize: '3rem',
    zIndex: '200'
}
export default GoUp;