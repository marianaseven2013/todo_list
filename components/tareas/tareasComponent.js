import { crearTarea } from "../../modules/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

   tareasDb.forEach((e, i) => {
    divTareasSec.appendChild(
        crearTarea(
            i, 
            e.titulo,
            e.estado,
            e.fechaAs,
            e.fechaEn,
            e.integrantes,
            e.claseEstado
        )
    );
});


    return divTareasSec;
}
