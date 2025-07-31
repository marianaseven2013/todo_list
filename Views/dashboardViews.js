import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard() {
    let tareasDb = [
    {
        titulo: "Hola mundo",
        estado: "Pendiente",
        descripcion: "hacer tareas",
        fechaAs: "2025-08-01",
        fechaEn: "2025-08-10",
        integrantes: ["😇", "🤓", "😎"],
         claseEstado: "estado-verde"
    },
    {
        titulo: "Segundo proyecto",
        estado: "En progreso",
        descripcion: "hacer proyecto",
        fechaAs: "2025-08-02",
        fechaEn: "2025-08-15",
        integrantes: ["😇", "🤓", "😎"],   
        claseEstado: "estado-borde"
    },
    {
        titulo: "Tercera tarea ejemplo",
        estado: "Completado",        
        descripcion: "hacer tareas",
        fechaAs: "2025-05-17",
        fechaEn: "2025-07-30",
        integrantes: ["😇", "🤓", "😎"],
        claseEstado: "estado-gris"
    }
];

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // header
    dashboard.appendChild(header());

    // seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";

    seccion1.appendChild(tareas(tareasDb));
    seccion1.appendChild(informacion(tareasDb[0]
         /*  {
        indice: 1,
        titulo: "Hola mundo",
        descripcion: "Chofisss para Chofiss Ingeniera",
        estado: "Pendiente",
        fechaAs: "2025-08-01",
        fechaEn: "2025-08-10",
        integrantes: ["😇", "🤓", "😎"],
         claseEstado: "estado-verde"
    }, */
    ));

    dashboard.appendChild(seccion1);

    // footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
