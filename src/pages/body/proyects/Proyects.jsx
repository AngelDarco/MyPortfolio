import './Proyects.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

const Proyects = ()=>{
    const [ data, setData ] = useState();

    useEffect(()=>{
        fetch('./src/pages/body/proyects/Proyects.json')
        .then(res => res.json())
        .then(res => setData(res))
    },[])

    return(
        <div className="containerProyects">
            <div className="body">
                <h1>Some of my Proyects</h1>
                <Swiper className="cards mySwiper"
                    autoplay={
                        {
                            delay: 5000,
                            disableOnInteraction: false
                        }
                    }
                    modules={
                        [Autoplay]
                    }
                >
                        {
                        data?.map(res => {
                       return(
                            <SwiperSlide className='mainCard' key={res.id} >
                        <div className="card">
                        <h1>{res.name}</h1>
                        <img src={res.img} alt={res.name} />
                        <ul>
                        { res?.lenguajes?.map( itm => <li key={res.id*Math.random()*100} >{itm}</li>) }
                        </ul>
                        <button>Visit <a href={res.link}></a> </button>
                        </div>
                    </SwiperSlide>
                       )
            })    
                        }
                </Swiper>
            </div>
        </div>
    )
}
export default Proyects;