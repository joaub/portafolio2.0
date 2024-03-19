// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./skills.css"
import encriptador from "../assets/encriptador.png"
import timer from "../assets/Timerjs.png"
import piano from "../assets/Piano.png"
import ahorcado from "../assets/juego-del-ahorcado.png"

function Proyectos() {
  return (
    <>
    <h2 className='titulo' id='proyectos'>Mis Proyectos</h2>
    <section className='carrusel'>
        <div className='elemento'>   
            <h3 >challenge 1 encriptador oracle/alura</h3>
            <section >
                <span >
                    <a href="https://github.com/joaub/encriptador-challenge" target="_blank">
                        <button className='boton'>Repositório</button>
                    </a>
                </span>

                <span >
                    <a href="https://joaub.github.io/encriptador-challenge/" target="_blank">
                    <button className='boton'>Ver demo</button></a>
                </span>
            </section>
      
            <img src={encriptador} className='imagen'/>
        </div>
    
        <div className='elemento'>   
            <h3 >temporizador con js</h3>
            <section >
                <span >
                    <a href="https://github.com/joaub/timerJS" target="_blank">
                        <button className='boton'>Repositório</button>
                    </a>
                </span>

                <span >
                    <a href="https://joaub.github.io/timerJS/" target="_blank">
                        <button className='boton'>Ver demo</button></a>
                </span>
            </section>

            <img src={timer} className='imagen'/>
        </div>
    
        <div className='elemento'>   
            <h3 >piano</h3>
            <section >            
                <span >
                    <a href="https://github.com/joaub/pianoJs" target="_blank">
                        <button className='boton'>Repositório</button>
                    </a>
                </span>
            
                <span >
                    <a href="https://joaub.github.io/pianoJs/" target="_blank">
                    <button className='boton'>Ver demo</button></a>
                </span>
            </section>
        
            <img src={piano} className='imagen'/>
        </div>
        
        <div className='elemento'>              
            <h3 >juego del ahorcado</h3>
            <section >            
                <span >
                <a href="https://github.com/joaub/ahorcado-juego" target="_blank">
                    <button className='boton'>Repositório</button>
                </a>
                </span>
                
                <span >
                <a href="https://joaub.github.io/ahorcado-juego/" target="_blank">
                    <button className='boton'>Ver demo</button></a>
                </span>
            </section>
            <img src={ahorcado} className='imagen'/>
        
        </div>
    </section>
    </>
  )
}

export default Proyectos