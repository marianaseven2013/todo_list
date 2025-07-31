export function informacion(data) {
    let divInfo = document.createElement('div');
    divInfo.className = "div-info";

    // Botones
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

    // Tarjeta
    let tarjeta = document.createElement('div');
    tarjeta.className = "tarjeta";

    // Cuadro de estado pequeño
    let circuloEstado = document.createElement('div');
    circuloEstado.className = "circulo-estado";
    circuloEstado.innerText = data.estado || "Estado";
    tarjeta.appendChild(circuloEstado);

    // Título
    let titulo = document.createElement('h3');
    titulo.innerText = data.titulo || "Título no disponible";
    tarjeta.appendChild(titulo);

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.innerText = data.descripcion || "Sin descripción.";
    tarjeta.appendChild(descripcion);

    // Integrantes
    let textoIntegrantes = document.createElement('p');
    textoIntegrantes.innerText = "Integrantes";
    tarjeta.appendChild(textoIntegrantes);

    let divEmojis = document.createElement('div');
    divEmojis.className = "div-emojis";

    (data.integrantes || []).forEach(e => {
        let span = document.createElement('span');
        span.className = "emoji";
        span.innerText = e;
        divEmojis.appendChild(span);
    });

    tarjeta.appendChild(divEmojis);
    divInfo.appendChild(tarjeta);

    return divInfo;
}
