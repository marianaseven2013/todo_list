import { crearTarea } from "../../modules/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

   tareasDb.forEach((e) => {
    divTareasSec.appendChild(
        crearTarea(
            1, 
            e.nombre,
            e.estado_tarea,
            e.fecha_asignada,
            e.fecha_entrega,
           /*  e.integrantes,
            e.claseEstado */
        []
        )
        
    );
});


    return divTareasSec;
}
