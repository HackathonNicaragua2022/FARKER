import React from 'react'
import "./estudiantes.css"
import CategoryIcon from '@mui/icons-material/Category';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

//contador de estudiante y nuestras categorias
function estudiantes() {
  return (
    <div className='container_bars'>
        <div className='container_bars2'>
            <div className='grupo_1'>
                <span>
                    <h1>
                        4
                    </h1>
                    <p>
                        Categorias
                        <CategoryIcon className='icon'/>
                    </p>
                </span>
                <span>
                    <h1>
                        45
                    </h1>
                    <p>
                        Instructores  
                        <PersonAddIcon className='icon'/> 
                    </p>
                </span>
            </div>
            <div className='grupo_1'>
                <span>
                    <h1>
                        8
                    </h1>
                    <p>
                        Aliados
                        <HandshakeIcon className='icon'/>
                    </p>
                </span>
                <span>
                    <h1>
                        +537
                    </h1>
                    <p>
                        Nuestra
                    </p>
                    <p>
                        comunidad
                        <ConnectWithoutContactIcon className='icon'/>
                    </p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default estudiantes