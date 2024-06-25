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