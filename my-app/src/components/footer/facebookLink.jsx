import React from "react";
import facebookLogo from "../../assets/images/facebook.svg";
{/*import { Link } from "react-router-dom";*/}

const FacebookLink = () => {
  return (
    <div className = 'flex flex-col items-center mt-0.5 lg:flex-row lg:mr-10  xl:flex-row'>
   {/* <Link to= 'https://es-es.facebook.com/' className = "no-underline" >*/}
        <img className="w-4 mr-1"
          src={facebookLogo}
          alt="Logo de la red social Facebook en color blanco a la derecha del pie de pagina de la web"
        />
        <h3 className= "text-white font-medium text-base lg:mr-8">Facebook</h3>
    </div>
  );
};

export default FacebookLink;
