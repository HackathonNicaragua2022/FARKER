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
              <ReactPlayer url='https://www.youtube.com/watch?v=bxbLfUWtQxc' />
              </div>
                  <div className="descripcion">
                  Este curso proporciona los elementos básicos de la estructura contable y los estados 
                  financieros para gestionar tu emprendimiento de  forma eficiente. Contiene temas básicos 
                  adaptados a los modelos comerciales, suministrando a los emprendedores conocimientos 
                  necesarios para comprender la contabilidad y tener buenas prácticas contables. Se desarrolla 
                  en un tiempo de 60 horas y 12 sesiones, contenidas en 6 semanas. Al final del curso, el 
                  emprendedor poseerá conocimientos básicos y significativos para continuar de manera correcta 
                  la contabilidad  de su negocio.
                  </div>
              </div>
              <div className="barra_lateral">
                <Lista
                  imagen="https://cdn-icons-png.flaticon.com/512/4968/4968390.png"
                  nombre="Introducción a la contabilidad. "
                />
                <Lista
                  imagen="http://2018.wsifirstsolutions.com.mx/wp-content/uploads/2018/11/Strategy-01.png"
                  nombre="Fundamentos de la Contabilidad. "
                />
                <Lista
                  imagen="https://w7.pngwing.com/pngs/696/936/png-transparent-computer-icons-share-icon-accounting-finance-accounting.png"
                  nombre="Procedimientos de la contabilidad"
                />
                <Lista
                  imagen="https://e7.pngegg.com/pngimages/174/763/png-clipart-financial-statement-finance-report-financial-services-analytics-text-orange.png"
                  nombre="Registros contables"
                />
                <Lista
                  imagen="https://w7.pngwing.com/pngs/982/825/png-transparent-financial-accounting-accountant-tax-business-business-people-payment-business-thumbnail.png"
                  nombre="Estructura de la Contabilidad"
                />
                <Lista
                  imagen="https://e7.pngegg.com/pngimages/750/604/png-clipart-financial-accounting-accountant-finance-financial-statement-others-business-financial-statement.png"
                  nombre="Herramientas financieras"
                />
                <Lista
                  imagen="https://www.eafit.edu.co/bogota/noticias-y-eventos/SiteAssets/Paginas/Combatir-el-Analfabetismo-financiero-es-posible/accounting.png"
                  nombre="Estados Financieros"
                />
              </div>
          </div>
    </div>
  );
}

export default Vista;
