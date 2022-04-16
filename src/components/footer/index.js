import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer(){
return(
    <footer>
        <section className="section-footer">
            <div className="container">
                <div className="row pt-3 pb-2">
                    <div className="col-lg-6">
                        <p className="d-flex align-items-center">
                            <span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAcCAYAAADcO8kVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEzSURBVFhH5ZYBDoMgDEV11zHZ/c+xxPO4fAOmOJiU9aN2L2m2LELpg+LG5zQNBizh8yuveR7D18sDMVVFBUqF1c4Rx7fk1IzR8lHXI3yyQeKS1Fos5igB6Yn4HmKsi2HJAZscthhWEXQ5vVqJAVMOVQx14Qcgd4wmWGJ6SanJ0yTozq1EhSEGuxNff6XQkBsvg3I6tWJyC0NcHfUavbbSLxu3nkAvYqzaaZvHgxh1mxRI5FqLoVyEZ2Atxmr3ziBZu4dWsjylmxwvl+/+pEKWDA3rXF7EHKE+VVox+52IIYHx3DMyNOTGy2CweDgx+zYy4V9aSS2PJYayixlKefC7DC0j88S0LOgysFuJKYcqvscdwyiAKWV90/W6fC0LoUsBvcQAWVDt/w/5HMazpCCPyDUMb+TbQb23PkalAAAAAElFTkSuQmCC" alt="logo footer" className="img-fluid w-50" />
                            </span>
                            <span className="section-footer__titulo">
                                Hospital Británico | © 2017
                            </span>
                        </p>
                        <p className="section-footer__texto">
                            Sr. consumidor o usuario: ante cualquier duda o reclamo dirijase al área de defensa y protección al consumidor de cualquier Centro de Gestión y Participación Comunal (CGPC) del Gobierno de la Ciudad Autónoma de Bs. As. y/o al teléfono gratuito 147 de Gobierno de la Ciudad Autónoma de Buenos Aires.
                        </p>
                        <p className="section-footer__texto">
                            Defensa de las y los consumidores. Para reclamos ingrese <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario">aqui.</a>
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex contact-social-networks">
                            <div className="icons d-flex">
                                <a href="https://www.facebook.com/hospitalbritanico/">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAatJREFUOE9jZMAB7ty5kwCUsv///78BIyOjAUgZkH0ByL4ApDeoqqpuxKaVEV0QaFAAUKwfiBVwWQYVfwCkC1VUVDYgq0MxEGjYBKBkPgGDUKSBrp0AdG0hTBBuICHDdl96wXD9ySewPhddcQYtWX5kgycCXVoAEgAbCPXmelwuK1t8gWHdqSdw6TxPNYY8LzV05YEg78MMBIWHPDYDrz3+yODXdRgsxcvBAnZZkJkMQ7CFLLryB0ADFRmhsTkfl+vWnnjMUL70Ilh6aZ4lg7mqML4gDgQZuACoIh6XqknbbjFM2n6LWAMXMt6+fRuUtvTRDTx5+y0DHN95C5YONpdlkBbiZAgyl2GQEebCcAM4nQJd+B+b65Bdhi6Pz+s4DQSFHShmn7z9xvD03XewmZrSfAx8XKwM01NMwDQ2gNPLMMWkhCHQyxepHymEEjUpLgT6KpBgwibBwIfAhK1AMOuRYCAi64EiAFfhAEuLIDW40h9QCrVwgMUooRIHR26CGwaSx1XAgspFrIUFkqEPgewCvAUssgugsR8ArQLAWROczoBVAJC5Ad0gmF4AkAnaLEbqilkAAAAASUVORK5CYII=" className="img-fluid px-1" alt="icon-fb"/>
                                </a>
                                <a href="https://twitter.com/htal_britanico">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAhJJREFUOE9jZMAB7ty5kwCUsv///78BIyOjAUgZkH0ByL4ApDeoqqpuxKaVEV0QaFAAUKwfiBVwWQYVfwCkC1VUVDYgq0MxEGjYBKBkPgGDUKSBrp0AdG0hTBBuIDmGIZk8EejSAhAfbCDUm+tJcRkWtYEg78MMBIWHPEjRp2+/Gfi4WLGavfvSC4Z1J58w8HGyMsTbK4DVgdRryfKD1D8AGqjICI3N+TAT5u+/x3Dj6WeGzhh9FENBhmXOPoMiJi3EyTA9xQRmIEguEGTgAiAjHqZy0rZbDJO232IwVxFmyPNSYzBXFQZLRU86znDy9lsUAzWl+RiW5lki+2gh4+3bt0FpC+6cJ2+/Mfh2HGL4/OMPWLOWDD8DSCPIsCfvvqEYmOepBrYUBsDpFOjC/8iqQC4EhRO6ZmyBWh2kxZDoqIQihWEgugvxxfyBBicGGWEuVAPRvQySBUVA+ZKLDJ++/8ZpHihsQeGHDIBevogRKSAF1x5/BEcCLByxmbqpzBY5dmFKFmIkG5gMKH2BDL3+9BOGeZ3R+gzBFrLY7AnESNhrTzxmuPHsMzhWrz35iKIJlO66YgzgSQnNxIfAhK2ANeuBwvD6k08MJ+9A0h0o2YDCzFVPAl8cIbIeSBVVCweYtWQaCi9pQObgKmBB5SK4sMADHgLlCvAWsMiaoUVaALQKAGdNcDoDVgFA5gZ0g2B6AUAN7ywd0pURAAAAAElFTkSuQmCC" className="img-fluid  px-1" alt="icon-fb"/>
                                </a>
                                <a href="https://www.linkedin.com/company/hospital-brit-nico-buenos-aires">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAd9JREFUOE9jZMAB7ty5kwCUsv///78BIyOjAUgZkH0ByL4AZB5QUVFZiE0rI7og0KAAoFg/ECvgsgwq/gBIFwIN3oCsDsVAoGETgJL5BAxCkQa6eoKqqmohTBBuILJhJ2+/ZZAW4mSQEeYi1uyJQJcWgBSDDYR6cz2IXbb4AsO6U08YZIS4GA40OhFrIEhdIMj7MANB4SEPEs2YdZphz+WXDLwcLAznuz1IMfAB0EBFRmhszofp/PTtN8OCA/cZXHTFGbRk+UkxEOxKkIELgIx4mE5Q+MHCMNhCFsyG8c1VhRnWnXwCVqopw8fgqieBbuFCxtu3b4PSlj5MZtK2WwyTtt9iAGlemmfJAOODwvTT999gDAN5nmoMeV5qcD44nQJd+B/ZGlwGgtSALNGU5mNYe+Ixw+cffxj4OFkZznW5o7iSJAPPdboz8HGxMrSsvQoOZ3AKmeyDaiCxXkbWvPvSC4bM2WcwDAR6+SJGpODzMsw1oEiKnnQcmwsXYiQbCg0MxEjYFBj4EJiwFTCyHq50yMvJwpDoqAT25pO33+DpESnZILIeOMDJKGmQohe1cIBJkGko3DCQObgKWFC5CC4s8ICHQLkCvAUssmZokRYArQLAWROcziBVwAZ0g2B6AUp9KzugB456AAAAAElFTkSuQmCC" className="img-fluid px-1" alt="icon-fb"/>
                                </a>
                                <a href="https://www.instagram.com/hospitalbritanicoarg/">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAlRJREFUOE9jZMAB7ty5kwCUsv///78BIyOjAUgZkH0ByL4AZB5QUVFZiE0rI7og0KAAoFg/ECvgsgwq/gBIFwIN3oCsDsVAoGETgJL5BAxCkQa6eoKqqmohTBBuILphT95+Y3j67jtWs6WFOBlkhLmQ5SYCXVoAEgAbCPXmehD707ffDJmzzzCcvPOWAYtGBphF5irCDNNTTRj4uFhhBgeCvA8zEBQe8iCZ6EnHGaQFORlqgrWRFaO4FGRpy9qrYB8szbeEyT0AGqjICI3N+SBRkO0ODfsYznW6oxgGEgcBkDd3X3oB9gFIjVH5ToYDDU7I3g8EGbgAqDYepOHk7bcMZUsuMBxsdAYbcO3xR4aKZZcYrj35COZryfAz1ARpMXz8/pvBVU+Cwb5+L0NXjAGDuaowzJULGW/fvg1KW/owAydtv8WwNA/iDd+OQwya0nwMXbHgZMhQtvgCw41nnxk2lduC+aDgyfNUgxsITqdAF/6HGQ9yIcxAmPfvTPZBCT+V3C1wb6IbCFJIfQMJeRkUbp0x4BABe/n6008MmyvscHn5IkaklC+5yHCg0QkeKeVLL4INAQFQeHZG6zNoyfKD+VgjBTlRE5NsYAEKSotYkw1IAdDQB0AKnrBlhLgYqoHJAykXoEQMyLDWddcYnrz7Bk8RQAUPgQlbAXvWmwPMesAYBxkMyn7IAJQ7QAaB0t70FBxZD+pKlJKGosIB5gJyii+gXnhJA06HKP6BhCeogAW5FhymeMBDoFwB3gIWWTPU4ABoFQBOiED2RWgVsAHdIJheAL8GSTscCllbAAAAAElFTkSuQmCC" className="img-fluid px-1" alt="icon-fb"/>
                                </a>
                            </div>
                            
                            <span>
                                <a href="">POLITICA DE PRIVACIDAD</a> | <a href="">MAPA DEL SITIO</a> | <a href="">INTRANET</a>
                            </span>
                        </div>
                        
                        <div className="d-flex flex-column mx-2 mt-3 contact-information">
                            <div className="icon-location">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABHNCSVQICAgIfAhkiAAAAYNJREFUOE+FVO1xgkAQ5aCAUEJSQbCCmAq0BFNBTAGQE4bfagXRDrSCaAWhA1NCLADIeze3zAZwwgzj3t6+fW8/0ATqsdbGURS9wjXHm/irCr+Huq63uP+RcCNGnucL2GtjTKyTid22LUFvWZbt6HNAggD4oI2AI+xNmqYnnouimMJn4Xvy9y8EG8oLw/BCJgQ45xgjElj438ncNM2DUY4jQKwtQLJ71DqDGaO2Pc7fXtnJM68MZFY4POLimfI86KJrA8OEYMqG/xNvRcaWQQBJvUskWmu5kMembHzNLn4AFOn/AK+UKrpHpSLBFXUmWioUnMlICRz6FnKX0hx0es5OA7ST5uhYU5ZlguK/pM16O7RcPTYknUhDujaDlfMaPGpsZzRq6oDS5lusmk3GpndVWPdgXWhKqY1NIZsbhwT4wfNLuJOsWo3u7h+gD2J93T7SJ3sMc6Xr7xiFWc31AGmYiJlpiRI3APYkM65bAF33ANiri0e3Uf35jAIZ5P8Rglvf5y8Nixg0HFwjlwAAAABJRU5ErkJggg==" className="img-fluid" alt="icon-fb"/>
                                <span className="ms-2">
                                    Perdriel 74 - CP 1280AEB - Ciudad Autónoma de Buenos Aires
                                </span>
                            </div>
                            <div className="icon-phone">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAWpJREFUOE+Vlf1Rg0AQxT0oQKwgWoFYgbEC04GkA/M3H4Mw/G8qkFQQrCApgQ60BBoAfC9zZE6+kr2ZDDfA/u7t212ibrDSNF3i8oyf27btUilVhmH4wmfSpZIkKQF47AdalvXk+34pBkJdOxG0g0pPDITCIxQy3cGq6/oujuNKAmXKk0CAPqAyFgGRco6At7EgFOg7iqKVFMiAfT+IsKZpPHHKum36hRGn2glS3MDHAoV57W5C3Rqp0grxOgF1Yx8MYIV0H6TpMv4EnFCZQ+VaKvEMhJp727Z/eoAt2uZdAj0DtUoPXn6ZAPg5UAqLVrjP9wqI2Joj+g+o/WQx+n1ZYGo2yOI3yzIX+wMOdoyDORx5EAS7AVArHUwPFFUI+sRz9q07ZgN7dxQ4o3TWzlmg4SlV3V5TGAA3kwo7AHxzYDyho/NuHsRv6EWgAWZbsYXo4WJMMVpMXQ00AbrS/KtwkCYL5GB/5KfuD5cDpTZURp/UAAAAAElFTkSuQmCC" className="img-fluid" alt="icon-fb"/>
                                <span className="ms-2">(011) 4309-6400</span>
                            </div>
                            <div className="icon-book">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABHNCSVQICAgIfAhkiAAAAKlJREFUOE9jbGpqSmBkZJzPQCT4////B2ZmZkfG5ubm/0TqgSsDaj5IFY2OtbW1B/DZDnRdA1C+Ht3GAqDABQLOBoVHAtWcuhBo2wN8NgJtcgDaaI9uI3l+BJryAGgaIRsNgGoEqOZHotPBqI14ggoeOEBGITB+CKVTuFFMTEwfYNkqEJgzNhAdH0CFII0fgPR9ICZaI9CFDxlbW1sN/v79O4EU24BqFwAABT2beVY2uE4AAAAASUVORK5CYII=" className="img-fluid" alt="icon-fb"/>
                                <span className="ms-2">Libro de sugerencias</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
)
}

export default Footer;