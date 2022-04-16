import React, { useRef, useEffect, useState } from 'react';
import './home.css';
import main from '../../assets/main-image.png'
import lateralDerecho from '../../assets/panel-lateral-derecho.svg' 
import novedades from '../../assets/novedades.png' 
import novedades2 from '../../assets/novedades-2.png' 
import turnos from '../../assets/turnos.png' 
import resultados from '../../assets/resultados.png' 
import profesionales from '../../assets/profesionales.png' 
import atencion from '../../assets/atencion.png' 
import Card from './card'
import Banner from './bannerImages'

function useOutsideAlerter(ref) {

    const [ showed , setShowed ] = useState(true)
    useEffect(() => {
      
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowed(true)
        } else {
          setShowed(false)
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }; 
    }, [ref]);

    return showed
}

function Home(){

    const wrapperRef = useRef(null);
    const showText =  useOutsideAlerter(wrapperRef);
    const [ classShow , setClasshow ] = useState('main--panel-lateral-novedades')
    const [ srcShow , setSrcshow ] = useState(novedades)

    useEffect(()=>{ 
        if(showText) {
            setClasshow("transitioned main--panel-lateral-novedades") 
        } else {
            setClasshow("transitioned main--panel-lateral-novedades-2")
        }
    },[showText])   
     
    return(
        <>
            <div className='main--container'>
                <img className='main--img' src={main} alt="img-main" />
                <img  className='main--panel-lateral-derecho' src={lateralDerecho} alt="panel-lateral-derecho" />
                <div ref={wrapperRef} className={classShow}>
                  {showText ? 
                  <p className='content'>Novedades</p> 
                  : 
                  <div className='content' style={{ paddingLeft :'50px' }}>
                    <h5>Novedades</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                  </div>  
                  }
                </div>
                <h1 className='main--welcome' >Bienvenida<br/>a tu HB Online</h1>    
                <div className='main--cards-container'>
                    <Card image={turnos} title="Turnos" />
                    <Card image={resultados} title="Resultados" />
                    <Card image={profesionales} title="Profesionales y especialidades" />
                    <Card image={atencion} title="Atención al paciente" />
                    <p className='main--cards-subtitle'>Atención telefónica las 24hs: 4309-6400 / Central de turnos 0810-222-2748 / +549-1130159749</p>
                </div>    
            </div>
            <Banner />
        </>
    )
}

export default Home;