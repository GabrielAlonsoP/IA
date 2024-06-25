const cloud = document.getElementById("cloud");
const menuLateral = document.querySelector(".menu-lateral");
const spans = document.querySelectorAll("span"); //Para seleccionar todos los elementos span del menu lateral*/

cloud.addEventListener("click", () => {
  menuLateral.classList.toggle("mini-menu-lateral");  //Toggle permite cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. */
  
  spans.forEach((span) => { //Con ForEach recorro la lista de spans 
    span.classList.toggle("oculto"); //Se le asigna la clase oculto a todos los spans encontrados//
  });
});