let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));


let notas = [];
let notesLS = JSON.parse(localStorage.getItem(`notas de usuario #${usuarioJSON.id}`)) || [];
notesLS.forEach(element => notas.push(element));

class Nota {
  constructor(id, titulo, contenido) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
  }
}


let id = notas.length;

let crearNotaForm = document.querySelector("#crearNota");
crearNotaForm.addEventListener("submit", function (e) {
  e.preventDefault("");
  let titulo = document.querySelector("#inputTitulo").value;
  let contenido = document.querySelector("#inputContenido").value;
  const notaNueva = new Nota(id, titulo, contenido);
  notas.push(notaNueva);
  localStorage.setItem(`notas de usuario #${usuarioJSON.id}`, JSON.stringify(notas));
  window.location = "notas.html";
});