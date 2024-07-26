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

}

const crearParrafo = () =>{
    console.log('desde crearParrafo')
    //crear un nuevo parrafo 

    // insertar  el parrafo nuevo en el segundo section
}

// agregar un evento al elemento del HTML 
const btnVermas = document.querySelector('.btn-outline-info');
console.log(btnVermas)

// manejadores de eventos 
//cuando tengo una funcion con parametros, hacer:
//btnVermas.addEventListener('click', ()=> crearParrafo(algoaqui))
btnVermas.addEventListener('click', crearParrafo)