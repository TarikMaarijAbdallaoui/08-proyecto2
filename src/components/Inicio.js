
import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
       <h1>
        Hola, soy víctor Robles y soy Desarrollador web en Madrid,
        y ofrezco mis servicios de programación y desarrollo en 
        todo tipo de proyectos web.
       </h1>

       <h2>
        Te ayuda a crear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet.<Link to="/contacto"> Contacta conmigo. </Link> 
       </h2>

       <section className="lasts-works">
        <h2> algunos de mis proyectos </h2>
        <p> Estos son algunos de mis trabajos de desarrollo web.</p>

        <div className="works"></div>
       </section>
    </div>
  )
}
