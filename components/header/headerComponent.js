export function header(){
    let header = document.createElement('header');
/*     header.innerText = "Hola Header";
 */

    let h1 = document.createElement('h1');
    h1.innerText = "Todo-List";
    header.appendChild(h1);

    let divtareas = document.createElement('div');
    divtareas.className = "div-tareas";
    divtareas.innerText = "Pendientes"
    let divtareash = document.createElement('div');
    divtareash.className = "HijoDt";
    divtareash.innerText = "10"
    divtareas.appendChild(divtareash);

/*     divtareas.innerText = "Holaa!";
 */    header.appendChild(divtareas);

    let divLogoUsuairo = document.createElement('div');
    divLogoUsuairo.className = "div-logo-usuario"; //AGREGAR ACA LO QUE FALTA
    let img = document.createElement('img');
    img.src = "../../assets/img/logoIcono.png";
    img.className = "iconol";
    img.alt = "Logo del usuario";


    divLogoUsuairo.appendChild(img);
    header.appendChild(divLogoUsuairo);

    return header;
}