import { crearTarea } from "../../modules/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

    tareasDb.forEach((e) => {
        const tareaElemento = crearTarea(
            1,
            e.nombre,
            e.estado_tarea,
            e.fecha_asignada,
            e.fecha_entrega,
            [] // Puedes agregar aquí más datos si lo deseas
        );

        // Al hacer click en la tarea, emitimos un evento personalizado con sus datos
        tareaElemento.addEventListener('click', () => {
            const evento = new CustomEvent('mostrarInfo', {
                detail: e
            });
            divTareasSec.dispatchEvent(evento);
        });

        divTareasSec.appendChild(tareaElemento);
    });

    return divTareasSec;
}
