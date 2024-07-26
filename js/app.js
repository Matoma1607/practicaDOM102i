const cambiarTitulo = () => {
  console.log("desde la funcion cambiarTitulo");
  //obtener el h1 del proyecto
  //const tituloPrincipal = document.getElementsByTagName('h1');
  const tituloPrincipal = document.getElementById("titulo");
  //const tituloPrincipal = document.getElementsByClassName('btn');
  //const tituloPrincipal = document.querySelector('.btn');
  //const tituloPrincipal = document.querySelectorAll('p');
  console.log(tituloPrincipal);
  //tituloPrincipal.innerText = 'Cambiamos el titulo'
  tituloPrincipal.innerHTML = "Cambiamos el titulo <strong>js</strong>";
  tituloPrincipal.className = "text-info";

  //cambiar el h1, texto y style
};

const crearParrafo = () => {
  console.log("desde crearParrafo");
  //crear un nuevo parrafo
  const parrafoNuevo = document.createElement("p");
  parrafoNuevo.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta totam neque iure nesciunt unde quo id, officia dolorum blanditiis ducimus! Possimus cum, quos dolores deleniti in rem ipsa sed porro iste repellat dolorum, obcaecati minus nesciunt excepturi asperiores hic maiores architecto ex tempora repudiandae fugiat veniam. Harum quae laboriosam maiores.";
  parrafoNuevo.className = "lead";
  console.log(parrafoNuevo);

  // insertar  el parrafo nuevo en el segundo section
  const secciones = document.querySelectorAll("section");
  // insertar el nuevo elemento
  //secciones[1].appendChild(parrafoNuevo); //agrega el nodo al final
  //secciones[1].prepend(parrafoNuevo) // agrega antes del h1 (arriba)
  secciones[1].insertBefore(parrafoNuevo, btnVermas)
};

// agregar un evento al elemento del HTML
const btnVermas = document.querySelector(".btn-outline-info");
console.log(btnVermas);

// manejadores de eventos
//cuando tengo una funcion con parametros, hacer:
//btnVermas.addEventListener('click', ()=> crearParrafo(algoaqui))
btnVermas.addEventListener("click", crearParrafo);
