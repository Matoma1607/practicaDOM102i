const cambiarTitulo = ()=>{
    console.log('desde la funcion cambiarTitulo')
    //obtener el h1 del proyecto
    //const tituloPrincipal = document.getElementsByTagName('h1');
    const tituloPrincipal = document.getElementById('titulo');
    //const tituloPrincipal = document.getElementsByClassName('btn');
    //const tituloPrincipal = document.querySelector('.btn');
    //const tituloPrincipal = document.querySelectorAll('p');
    console.log(tituloPrincipal)
    //tituloPrincipal.innerText = 'Cambiamos el titulo'
    tituloPrincipal.innerHTML = 'Cambiamos el titulo <strong>js</strong>'


    //cambiar el h1, texto y style
}