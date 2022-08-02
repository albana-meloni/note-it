let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));

let tituloDOM = document.querySelector("#note-title");
let contenidoDOM = document.querySelector("#note-body");
let cerrar = document.querySelector("#note-close");
let borrar = document.querySelector("#note-delete");
let mover = document.querySelector("#note-move");

// mostrar
let notasJSON = JSON.parse(localStorage.getItem(`notas de usuario #${usuarioJSON.id}`));
let notaUser = sessionStorage.getItem('nota-user');

let notaActual = notasJSON.find(item => item.id == notaUser);

tituloDOM.value = notaActual.titulo;
contenidoDOM.value = notaActual.contenido;

// cerrar pestaña
cerrar.addEventListener("click", () => window.location = "./notas.html");

// borrar
borrar.addEventListener("click", ()=> {
  confirm("Se eliminará la nota");
  let index = notasJSON.indexOf(notaActual);
  notasJSON.splice(index, 1);
  localStorage.setItem(`notas de usuario #${usuarioJSON.id}`, JSON.stringify(notasJSON));
  window.location = "./notas.html";
});

// mover a carpeta
mover.addEventListener("click", ()=> {

});