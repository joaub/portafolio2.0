import React from 'react'
import '../App.css'
import persona from '../assets/persona.jpg' 
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function PrimerComponente() {
  return (
    <>
    <section >         
          <article>
          <h1 className='titulo'>Acerca de mí</h1> 
          <img src={persona} alt="" className="persona"/>
            <h2 className='nombre'>Joaquin Ugarte.</h2>
            <h2 className='nombre'>Desarrollador FullStack.</h2>
            <p className='parrafo'>Tengo 23 años, vivo en Mendoza,Argentina. </p>
            <p className='parrafo'>Mi deseo es seguir expandiendo mi conocimiento y experiencia en este mundo.</p>
          </article>
      </section>

     
     <section className='contacto' >
      <h2 >Contacto</h2>  
        <h3>Correo</h3>
        <a className='correo' target="_blank">Ugartejoa12@gmail.com</a>
        <a className='icono' href="https://github.com/joaub" target="_blank"><FaGithub/></a>
        <a className='icono' href="#" target="_blank"><FaLinkedin  /></a>
    </section>
    </>
  )
}

export default PrimerComponente