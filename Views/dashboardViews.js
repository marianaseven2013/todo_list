/* alert("Hola Mundo"); */
export function dashboard(){
    let seccion = document.createElement('section');


    let h1 = document.createElement('h1');
    h1.innerText = "hola mundo"
    seccion.appendChild(h1);


    return seccion;
}

document.body.appendChild(dashboard());