import React from "react";
import twitterLogo from "../../assets/images/twitter.svg";
{/*import {Link} from "react-router-dom";*/}

const TwitterLink = () => {
    return (
        <div className="flex flex-col items-center mr-4 lg:flex-row lg:mr-20 xl:mr-4 xl:flex-row">
            {/*<Link to= 'https://twitter.com/?lang=es'className = "no-underline">*/}
            <img className= " w-4 h-auto mr-1" src= {twitterLogo} alt="Logo de la red social Twitter en color blanco a la derecha del pie de pagina de la web" />
            <h3 className = "flex items-center text-white font-medium text-base">Twitter</h3>           
        </div>

)}

export default TwitterLink

