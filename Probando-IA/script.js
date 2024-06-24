const cloud = document.getElementById("cloud");
const menuLateral = document.querySelector(".menu-lateral");
const span = document.querySelector("span");

cloud.addEventListener("click", () => {
  menuLateral.classList.toggle("mini-menu-lateral");  //Toggle permite cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. */
  span.classList.toggle("oculto");
});