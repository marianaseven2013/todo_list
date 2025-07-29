/* alert("Hola Mundo"); */ 
import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard(){
    let seccion = document.createElement('section');

    seccion.appendChild(header());
    seccion.appendChild(footer());
   /*  let h1 = document.createElement('h1');
    h1.innerText = "hola mundo"
    seccion.appendChild(h1); */


    return seccion;
}

document.body.appendChild(dashboard());