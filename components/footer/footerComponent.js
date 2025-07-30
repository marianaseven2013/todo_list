export function footer() {
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let linea = document.createElement('div');
    linea.classList.add('footer-line');

    let link = document.createElement('a');
    link.href = "https://github.com/marianaseven2013/todo_list"; // Reemplaza con tu URL real
    link.innerText = " Ir a GitHub";
    link.target = "_blank";
    link.classList.add('footer-link');

    footer.appendChild(linea);
    footer.appendChild(link);

    return footer;
}
