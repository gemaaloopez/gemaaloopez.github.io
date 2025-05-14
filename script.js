let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("JIRA");
        habilidades[1].classList.add("MetodologíasÁgiles");
        habilidades[2].classList.add("XRAY");
        habilidades[3].classList.add("PowerBI");
        habilidades[4].classList.add("Javascript");
        habilidades[5].classList.add("HTMLCSS");
        habilidades[6].classList.add("Gestiondeproyectos");
        habilidades[7].classList.add("organizacion");
        habilidades[8].classList.add("analisis");
        habilidades[9].classList.add("Liderazgo");
        habilidades[10].classList.add("TrabajoEnEquipo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 