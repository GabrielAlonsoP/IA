const cloud = document.getElementById("cloud");
const menuLateral = document.querySelector(".menu-lateral");
const spans = document.querySelectorAll("span"); //Para seleccionar todos los elementos span del menu lateral*/
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menuLateral.classList.toggle("max-menu-lateral");  //Toggle permite cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. */
   if (menuLateral.classList.contains("max-menu-lateral")) { //Verifica si el menu lateral tiene la clase max-menu-lateral
    menu.children[0].style.display = "none"; // si la tiene el primer hijo del menu se lo oculta
    menu.children[1].style.display = "block"; // si la tiene el segundo hijo del menu se lo muestra
  }
  else {
    menu.children[0].style.display = "block"; // si no la tiene el primer hijo del menu se lo muestra
    menu.children[1].style.display = "none"; // si no la tiene el segundo hijo del menu se lo oculta  
  }
});

cloud.addEventListener("click", () => {
  menuLateral.classList.toggle("mini-menu-lateral");  //Toggle permite cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. */
  
  spans.forEach((span) => { //Con ForEach recorro la lista de spans 
    span.classList.toggle("oculto"); //Se le asigna la clase oculto a todos los spans encontrados//
  });
});

//--------------------------------------------------------------------------- EXPANCIÓN Y RETRACCIÓN DE TEXTAREA PARA ENVÍO DE MENSAJE -----------------------------------------------//

const textarea = document.getElementById('mensaje');

textarea.addEventListener('input', function() {
    // Reinicia la altura para medir correctamente
    this.style.height = 'auto';
    
    // Calcula la altura necesaria para el contenido
    const scrollHeight = this.scrollHeight;
    const clientHeight = this.clientHeight;
    const minHeight = 44; // Altura mínima inicial del textarea
    
    // Ajusta la altura solo si el contenido excede la altura visible actual
    if (scrollHeight > clientHeight) {
        this.style.height = scrollHeight + 'px';
    } else {
        // Asegura que el textarea no sea más pequeño que su altura mínima inicial
        this.style.height = minHeight + 'px';
    }
});

//--------------------------------------------------------------------------- INTERACCIÓN DE BUSQUEDA Y RESPUESTA ----------------------------------------------------------------------//

document.getElementById('submitButton').addEventListener('click', function() {
  const mensaje = document.getElementById('mensaje').value;

  //Aqui debería estar la llamada a la API (Simulación de llamada a la API)//
  const IARespuesta = RespuestaSimulada(mensaje);

  document.getElementById('outputText').innerText = IARespuesta;

});

function RespuestaSimulada(respuesta) {
  //Simula una respuesta de la IA//
  return respuesta;
}

// Suponiendo que tienes una función que agrega texto a `.respuesta`
function agregarRespuesta(texto) {
  var respuesta = document.querySelector('.respuesta');
  respuesta.innerHTML += `<p>${texto}</p>`;
  // Asegurar que siempre se vea la última respuesta
  respuesta.scrollTop = respuesta.scrollHeight;
}

// Ejemplo de uso
agregarRespuesta("Esta es una respuesta dinámica.");
agregarRespuesta("Otra respuesta más larga que puede hacer scroll.");
