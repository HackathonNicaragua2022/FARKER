import Navbar from "./Navbar/navbar";
import Banner from "./banner/banner";
import Span from "./span/span";
import Estudiantes from "./estudiantes/estudiantes";
import Fooder from "./footer/fooder";
import Responsive from "./carrusel/slider";

import React from 'react'

function home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <Responsive/>
      <Span/>
      <Estudiantes/>
      
      <Fooder/>
    </React.Fragment>
  )
}

export default home