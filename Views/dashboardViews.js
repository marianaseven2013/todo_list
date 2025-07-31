import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard() {
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // header
    dashboard.appendChild(header());

    // seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";

    seccion1.appendChild(tareas());
    seccion1.appendChild(informacion());

    dashboard.appendChild(seccion1);

    // footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
