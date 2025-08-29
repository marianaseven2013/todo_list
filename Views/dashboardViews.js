import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { footer } from "../components/footer/footerComponent.js";


export async function dashboard() {
    try {
        const resultado = await fetch("http://localhost:3000/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;



        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";
        console.log(tareasDb);

        dashboard.appendChild(header());

        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";
        seccion1.appendChild(tareas(tareasDb));
        dashboard.appendChild(seccion1);

        seccion1.appendChild(informacion(tareasDb[0]
 
    ));
 

    dashboard.appendChild(footer());

    return dashboard;
    } catch (error) {
        console.error("Error: ", error);
    }
}



dashboard().then(elemento => {
document.body.appendChild(elemento);

});
