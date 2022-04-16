import React from 'react';
import './banner.css'
/*
597592
12/04/2022
*/

import dataFiscal from '../../../assets/data-fiscal.png'
import registroNacional from '../../../assets/registro-nacional-dbd.png'
import itaes from '../../../assets/itaes.png'
import redGlobal from '../../../assets/red-global.png'
import safeTravels from '../../../assets/safe-travels.png'

function Banner(){

    

    return(
        <section class="section-logos bg-white">
            <div class="container">
                <div class="row pt-3 pb-3 d-flex justify-content-center align-items-center">
                    <div class="col">
                        <a href="http://qr.afip.gob.ar/?qr=e7rTZqrC85H6Ftzi3bXXGw,,">
                            <img src={dataFiscal} class="img-fluid"/>
                        </a>
                    </div>
                    <div class="col">
                        <a href="http://www.jus.gov.ar/datos-personales.aspx">
                            <img src={registroNacional} alt="" class="img-fluid"/>
                        </a>
                    </div>
                    <div class="col">
                        <a href="http://www.itaes.org.ar/Inicio.aspx">
                            <img src={itaes}  alt="" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://www.hospitalesporlasaludambiental.net/">
                            <img src={redGlobal} alt="" class="img-fluid"/>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://www.argentina.travel/es">
                            <img src={safeTravels} alt="" class="img-fluid"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;