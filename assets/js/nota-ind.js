let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;

let container = document.querySelector("#container__nota-ind");
let tituloDOM = document.querySelector("#note-title");
let contenidoDOM = document.querySelector("#note-body");
let cerrar = document.querySelector("#note-close");
let borrar = document.querySelector("#note-delete");

cerrar.addEventListener("click", () => window.location = "./notas.html");

let notasJSON = JSON.parse(localStorage.getItem(`notas de usuario #${id}`));
let i = 0;
let notaArray = notasJSON[i];
console.log(notaArray.id)
if (i === notaArray.id) {
  tituloDOM.value = notaArray.titulo;
  contenidoDOM.value = notaArray.contenido;
} else {
  i++;
  notaArray = notasJSON[i];
  tituloDOM.value = notaArray.titulo;
  contenidoDOM.value = notaArray.contenido;
}