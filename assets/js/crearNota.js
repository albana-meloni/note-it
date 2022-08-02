let usuarioJSON = JSON.parse(sessionStorage.getItem("usuario activo"));
const {nombre, id} = usuarioJSON;


let notas = [];
let notesLS = JSON.parse(localStorage.getItem(`notas de usuario #${id}`)) || [];
notesLS.forEach(element => notas.push(element));

class Nota {
  constructor(id, titulo, contenido) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
  }
}

let idNota = notas.length;

let crearNotaForm = document.querySelector("#crearNota");
crearNotaForm.addEventListener("submit", function (e) {
  e.preventDefault("");
  let titulo = document.querySelector("#inputTitulo").value;
  let contenido = document.querySelector("#inputContenido").value;
  const notaNueva = new Nota(idNota, titulo, contenido);
  notas.push(notaNueva);
  localStorage.setItem(`notas de usuario #${id}`, JSON.stringify(notas));
  window.location = "./notas.html";
});