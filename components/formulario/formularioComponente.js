export function crearFormulario(onEnviar) {
    const overlay = document.createElement("div");
    overlay.className = "form-overlay";

    const form = document.createElement("div");
    form.className = "formulario";

    const titulo = document.createElement("h2");
    titulo.innerText = "Nueva Tarea";

    const inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título";

    const inputDescripcion = document.createElement("textarea");
    inputDescripcion.placeholder = "Descripción";

    const inputFechaEntrega = document.createElement("input");
    inputFechaEntrega.type = "date";
    inputFechaEntrega.placeholder = "Fecha de entrega";


    const selectEstado = document.createElement("select");
    ["Pendiente", "En proceso", "Finalizado"].forEach(estado => {
        const option = document.createElement("option");
        option.value = estado;
        option.innerText = estado;
        selectEstado.appendChild(option);
    });

    const btnAgregar = document.createElement("button");
    btnAgregar.innerText = "Añadir";
    btnAgregar.className = "btn-agregar";

    const btnCerrar = document.createElement("button");
    btnCerrar.innerText = "Cancelar";
    btnCerrar.className = "btn-cerrar";

    form.append(titulo, inputTitulo, inputDescripcion, inputFechaEntrega, selectEstado, btnAgregar, btnCerrar);
    overlay.appendChild(form);
    document.body.appendChild(overlay);

    btnCerrar.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    btnAgregar.addEventListener("click", () => {
       const nuevaTarea = {
    estado: selectEstado.value,
    titulo: inputTitulo.value || "Sin título",
    descripcion: inputDescripcion.value || "Sin descripción",
    fechaEntrega: inputFechaEntrega.value || "Sin fecha",
    fechaCreacion: new Date().toISOString()
};

        onEnviar(nuevaTarea); // Ejecuta la función que le pasamos
        document.body.removeChild(overlay);
    });
}
