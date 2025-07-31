import { crearTarea } from "../../modules/itemTarea/itemTarea.js";

let tareasDb = [
    {
        titulo: "Hola mundo",
        estado: "Pendiente",
        fechaAs: "2025-08-01",
        fechaEn: "2025-08-10",
        integrantes: ["😇", "🤓", "😎"],
         claseEstado: "estado-verde"
    },
    {
        titulo: "Segundo proyecto",
        estado: "En progreso",
        fechaAs: "2025-08-02",
        fechaEn: "2025-08-15",
        integrantes: ["😇", "🤓", "😎"],   
        claseEstado: "estado-borde"
    },
    {
        titulo: "Tercera tarea ejemplo",
        estado: "Completado",
        fechaAs: "2025-05-17",
        fechaEn: "2025-07-30",
        integrantes: ["😇", "🤓", "😎"],
        claseEstado: "estado-gris"
    }
];

export function tareas() {
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

    tareasDb.forEach((e, i) => {
        divTareasSec.appendChild(
            crearTarea(i + 1, e.titulo, e.estado, e.fechaAs, e.fechaEn, e.integrantes, e.claseEstado)
        );
    });

    return divTareasSec;
}
