import React from "react";
import images from "../../assets/images";
import "./LogStyle.css";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#114B5F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6CB14F',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6CB14F',
      },
      '&:hover fieldset': {
        borderColor: '#6CB14F',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6CB14F',
      },
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        color: "#114B5F"
      },

    },
  });

function Login() {
  return (
    <div className="ContenedorLog">
        <div className="ContenedorAll">
            <div className="ContenedorAcces">
                <img
                src={images[1].cam_logo_oscuro}
                alt={images[1].title}
                className="LogoScuro"
                />
                <div className="Inputs">
                    <CssTextField label="Usuario" id="custom-css-outlined-input" className="input" />
                </div>
                <div className="Inputs">
                    <CssTextField label="Contraseña" type="password" id="custom-css-outlined-input" className="input" />
                </div>
                <div className="Iniciar">
                    <Link to={"/Home"}>
                      <button className="BotonInicio">
                          Iniciar
                      </button>
                    </Link>     
                    <div className="blok">
                        <p className="Parrafo">Olvido su contraseña?</p>
                        <h2 className="Titulo">Aun no tienes cuenta? registrate</h2>
                    </div>
                </div>
            </div>
            <div className="ContenedorImg">
                <h1>Todo en una solucion.</h1>
                <img src={"https://blog.bind.com.mx/hubfs/2.0/Modulos/Bind-ERP-Modulos_Reportes-tiempo-real-existencias.png"} alt="" className="Img1"/>
                <p className="Stive">
                  " Porque la gente que está lo suficientemente loca como para 
                </p>
                <p className="Stive">
                pensar que pueden cambiar el mundo, 
                </p>
                <p className="Stive">
                son los que logran hacerlo "
                </p>
                <p className="Stive">
                  - Stive Jobs
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;
