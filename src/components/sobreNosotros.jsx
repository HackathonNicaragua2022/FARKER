import React from 'react'
import Navbar from './Navbar/navbar'
import Fooder from './footer/fooder'
import Card from './cardNosotros/card'
import Card2 from './cardNosotros/card2'
import images from '../assets/images'
import "./cardNosotros/card.css"

function SobreNosotros() {
  return (
    <div>
        <Navbar/>
        <h1 className='texto1'>Conoce al equipo de Complace.</h1>
        <Card
            imagen={images[7].Roland}
            nombre="Roland Loaisiga"
            puesto="Desarrollador"
            descripcion="Estudiante de la carrera de ingenieria en sistemas de informacion, con experiencia en desarrollo web."
        />
        <Card2
            imagen={images[9].Josue}
            nombre="Josue Bermudez"
            puesto="Desarrollador"
            descripcion="Estudiante activo II año de la carrera de ingenieria en sistemas, niveles basicos y medios en lenguajes de programacion"
        />
        <Card
            imagen={images[8].Janmer}
            nombre="Janmer Jacamo"
            puesto="CEO"
            descripcion="Comunicador del equipo, estudiante universitario en administracion de empresas V año y certificado enhabilidadses blandas
                        participacion en proyectos de innovacion, hablar en publico. "
        />
        <Card2
            imagen={images[10].Joseling}
            nombre="Joseling Soza"
            puesto="Community manager"
            descripcion="Rol de marketing, estudiante de adminitracion de empresas V año, certificacion en marketing digital, manejo de socual media, 
                        habilidades blandas en ingles. "
        />
         <Card
            imagen={images[11].Jairo}
            nombre="Jairo Guevara"
            puesto="Diseñador"
            descripcion="Egresado de la carrera de ingenieria en ciencias de la comunicacion, dominio basico de Java Script, Angular, Wordpress
                          Html, css, boostap, SQL serve, MS word, conocimiento en desarollo de web front y movil."
        />

        <Fooder/>
    </div>
  )
}

export default SobreNosotros