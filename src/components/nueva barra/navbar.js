import { useRef } from "react";
import {FaBars, FaTimes} from"react-icons/fa"
import './nav1.css'
import images from "../../assets/images";
import {
  Link
} from "react-router-dom"

function Navbar1() {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
        <div className="divpa1">
          <header>
            <img src={images[1].cam_logo_oscuro} alt="logo" className="logo"/>
            <nav ref={navRef}>
              <Link to="/#">Home</Link>
              <Link to="/#">Sobre nosotros</Link>
              <Link to="/#">Contactanos</Link>
              <Link to="/#">Categorias</Link>
              <button
                className="nav-btn nav-close-btn" 
                onClick={showNavbar}>
                <FaTimes/>
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars/>
            </button>
          </header>
        </div>
  );
}

export default Navbar1;