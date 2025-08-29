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
            []
        );

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
