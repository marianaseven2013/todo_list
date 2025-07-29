/* alert("Hola Mundo"); */ 
import { header } from "../components/header/headerComponent.js";

export function dashboard(){
    let seccion = document.createElement('section');

    seccion.appendChild(header());
   /*  let h1 = document.createElement('h1');
    h1.innerText = "hola mundo"
    seccion.appendChild(h1); */


    return seccion;
}

document.body.appendChild(dashboard());