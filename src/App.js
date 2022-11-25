import Home from './components/home';
import "./App.css"
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Vista from './components/Vista/VistaCurso';

// Router de la app
function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Vista" element={<Vista/>}/>
          </Routes>
      </BrowserRouter>
    </>     
  );
}

export default App;
