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

    btnTarea.addEventListener('click', () => {
        if (divInfo.querySelector('.form-tarea')) return;

        const form = document.createElement('form');
        form.className = 'form-tarea';

        const inputTitulo = document.createElement('input');
        inputTitulo.type = 'text';
        inputTitulo.placeholder = 'Título de la tarea';
        inputTitulo.required = true;

        const inputDescripcion = document.createElement('textarea');
        inputDescripcion.placeholder = 'Descripción';
        inputDescripcion.required = true;

        const btnAgregar = document.createElement('button');
        btnAgregar.type = 'submit';
        btnAgregar.innerText = 'Agregar tarea';

        form.appendChild(inputTitulo);
        form.appendChild(inputDescripcion);
        form.appendChild(btnAgregar);

        divInfo.insertBefore(form, tarjeta);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nuevaTarea = {
                titulo: inputTitulo.value,
                descripcion: inputDescripcion.value,
                estado_tarea: 'Pendiente',
                integrantes: [],
            };

            console.log('Nueva tarea:', nuevaTarea);

            divInfo.actualizarInfo(nuevaTarea);

            form.remove();
        });
    });

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
