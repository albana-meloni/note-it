let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;

let container = document.querySelector("#container__nota-ind");
let tituloDOM = document.querySelector("#note-title");
let contenidoDOM = document.querySelector("#note-body");
let cerrar = document.querySelector("#note-close");
let borrar = document.querySelector("#note-delete");

cerrar.addEventListener("click", () => window.location = "./notas.html");

let notasJSON = JSON.parse(localStorage.getItem(`notas de usuario #${id}`));
let notaUser = sessionStorage.getItem('nota-user');

let mostrar = notasJSON.find(item => item.id == notaUser);

tituloDOM.value = mostrar.titulo;
contenidoDOM.value = mostrar.contenido;