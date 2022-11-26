import React from 'react'
import images from '../../assets/images'
import "./lista.css"

function Lista(props) {
  return (
    <div className='sigVideo'>
        <img src={images[1].cam_logo_oscuro} alt="" className='logoMin'/>
        <h3>{props.nombre}</h3>
    </div>
  )
}

export default Lista