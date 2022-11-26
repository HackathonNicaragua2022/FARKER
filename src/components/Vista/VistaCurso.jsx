import React from "react";
import Navbar from "../Navbar/navbar";
import "./vistaStyle.css";
import ReactPlayer from 'react-player'
import Lista from "../listaDeSiguiente/listaSiguente";

function Vista() {
  return (
    <div>
      <Navbar />
      <div className="ContenedorVista">   
            <div className="contenedor_2">
              <div className="vista_1">
              <ReactPlayer url='' />
              </div>
                  <div className="descripcion">
                    esta es la descripción
                  </div>
              </div>
              <div className="barra_lateral">
                <Lista
                  nombre="Primero"
                />
                <Lista
                  nombre="segundo"
                />
                <Lista
                  nombre="tercero"
                />
              </div>
          </div>
    </div>
  );
}

export default Vista;
