export function informacion(data) {
    let divInfo = document.createElement('div');
    divInfo.className = "div-info";

    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";

    let btnArchivado = document.createElement('button');
    btnArchivado.className = "btn-archivado";
    btnArchivado.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivado);
    divInfo.appendChild(divBotones);

    let tarjeta = document.createElement('div');
    tarjeta.className = "tarjeta";

    let circuloEstado = document.createElement('div');
    circuloEstado.className = "circulo-estado";
    circuloEstado.innerText = data?.estado_tarea || "Estado";
    tarjeta.appendChild(circuloEstado);

    let titulo = document.createElement('h3');
    titulo.innerText = data?.titulo || data?.nombre || "Título no disponible";
    tarjeta.appendChild(titulo);

    let descripcion = document.createElement('p');
    descripcion.innerText = data?.descripcion || "Sin descripción.";
    tarjeta.appendChild(descripcion);

    let textoIntegrantes = document.createElement('p');
    textoIntegrantes.innerText = "Integrantes";
    tarjeta.appendChild(textoIntegrantes);

    let divEmojis = document.createElement('div');
    divEmojis.className = "div-emojis";

    (data?.integrantes || []).forEach(e => {
        let span = document.createElement('span');
        span.className = "emoji";
        span.innerText = e;
        divEmojis.appendChild(span);
    });

    tarjeta.appendChild(divEmojis);
    divInfo.appendChild(tarjeta);

    // Botón para crear tarea
    btnTarea.addEventListener('click', () => {
        crearFormulario((tarea) => {
            console.log(tarea);
            // Aquí podrías después agregarla visualmente
        });
    });

    // Función para actualizar la información
    divInfo.actualizarInfo = function(nuevaData) {
        circuloEstado.innerText = nuevaData.estado_tarea || "Estado";
        titulo.innerText = nuevaData.titulo || nuevaData.nombre || "Título no disponible";
        descripcion.innerText = nuevaData.descripcion || "Sin descripción.";
        divEmojis.innerHTML = "";
        (nuevaData.integrantes || []).forEach(e => {
            let span = document.createElement('span');
            span.className = "emoji";
            span.innerText = e;
            divEmojis.appendChild(span);
        });
    }

    return divInfo;
}
