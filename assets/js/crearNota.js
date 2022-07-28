let notas = [];
let notesLS = JSON.parse(sessionStorage.getItem('notas usuario')) || [];
notesLS.forEach(element => notas.push(element));

class Nota {
  constructor(titulo, contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
  }
}

let crearNotaForm = document.querySelector("#crearNota");
crearNotaForm.addEventListener("submit", function (e) {
  e.preventDefault("");
  let titulo = document.querySelector("#inputTitulo").value;
  let contenido = document.querySelector("#inputContenido").value;
  const notaNueva = new Nota(titulo, contenido);
  notas.push(notaNueva);
  sessionStorage.setItem("notas usuario", JSON.stringify(notas));
  window.location = "notas.html";
});