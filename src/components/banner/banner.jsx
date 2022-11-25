import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import "./banner.css"

//banner de inicio en la vista del homes
function banner() {
  return (
    <div className='banner'>
        <div className='cont_birret'>
            <SchoolIcon className='birret'/>
        </div>
        <h1>El crecimiento empresarial a un click</h1>
        <br></br>
        <h2>"Con nosotros tu formacion empresarial a otro nivel"</h2>
        <h2>Capacítate ahora...!</h2>
    </div>
  )
}

export default banner