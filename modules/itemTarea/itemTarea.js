// modules/itemTarea/itemTarea.js
export function crearTarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes, estiloEstado = "") {
    let div = document.createElement('div');
    div.classList = "tarea";

    // Número
    let divNumero = document.createElement('div');
    divNumero.classList = "tarea-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // Título
    let h3Titulo = document.createElement('h3');
    h3Titulo.classList = "tarea-titulo";
    h3Titulo.textContent = titulo;
    div.appendChild(h3Titulo);

    // Estado (con clase adicional)
    let divEstado = document.createElement('div');
    divEstado.classList = `tarea-estado ${estiloEstado}`.trim();
    divEstado.textContent = estado;
    div.appendChild(divEstado);

    // Fecha de asignación
    let spanAsignacion = document.createElement('span');
    spanAsignacion.classList = "tarea-fecha";
    spanAsignacion.textContent = fechaAs;
    div.appendChild(spanAsignacion);

    // Fecha de entrega
    let spanEntrega = document.createElement('span');
    spanEntrega.classList = "tarea-fecha";
    spanEntrega.textContent = fechaEn;
    div.appendChild(spanEntrega);

    // Integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.classList = "tarea-integrantes";
    listaIntegrantes.forEach(integrante => {
        let span = document.createElement('span');
        span.classList = "integrante";
        span.textContent = integrante;
        divIntegrantes.appendChild(span);
    });
    div.appendChild(divIntegrantes);

    // Eliminar
    let divEliminar = document.createElement('div');
    divEliminar.classList = "tarea-eliminar";
    divEliminar.innerHTML = "🗑️";
    divEliminar.title = "Eliminar tarea";
    divEliminar.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(divEliminar);

    return div;
}
