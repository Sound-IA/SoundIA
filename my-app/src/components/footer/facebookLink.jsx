import React from "react";
import facebookLogo from "../../assets/images/facebook.svg";

const FacebookLink = () => {
  return (
    <div className = 'flex flex-col items-center md:flex-row '>
        <img className="w-4 mr-1"
          src={facebookLogo}
          alt="Logo de la red social Facebook en color blanco a la derecha del pie de pagina de la web"
        />
        <h3 className= "text-white font-medium text-base">Facebook</h3>
    </div>
  );
};

export default FacebookLink;
